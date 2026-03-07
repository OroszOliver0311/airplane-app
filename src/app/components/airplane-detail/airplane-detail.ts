import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { AirplaneService } from '../../services/airplane';
import { Airplane } from '../../models/airplane.model';
import { TailNumberPipe } from '../../pipes/tail-number-pipe';
import { MaintenanceStatusBarComponent } from '../maintenance-status-bar/maintenance-status-bar';
@Component({
  selector: 'app-airplane-detail',
  standalone: true,
  imports: [RouterLink, TailNumberPipe, MaintenanceStatusBarComponent],
  templateUrl: './airplane-detail.html',
  styleUrl: './airplane-detail.css',
})
export class AirplaneDetailComponent {
  private route = inject(ActivatedRoute);
  private airplaneService = inject(AirplaneService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  airplane: Airplane | undefined;
  isLoading = true;
  errorMessage = '';

ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
  
  if (id) {
      this.airplaneService.getById(id).subscribe({
        next: (data) => {
          this.airplane = data;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.errorMessage = 'Cant Load Data.';
          this.isLoading = false;
          this.cdr.detectChanges();
          console.error('API Error:', err);
        }
      });
    } else {
      this.isLoading = false;
      this.errorMessage = 'Invalid Airplane ID.';
    }
  }
onFlightAdded(): void {
    if (this.airplane && this.airplane.id) {
      this.airplaneService.incrementFlights(this.airplane.id).subscribe({
        
        next: (updatedAirplane) => {
          this.airplane = updatedAirplane;
          this.cdr.detectChanges();
        },
        
        error: (err) => {
          console.error('Error', err);
          alert('Error adding flight. Please try again.');
        }
        
      });
    }
  }
  onDelete(): void {
    
    if (this.airplane && this.airplane.id) {

      const confirmed = window.confirm('Are you sure you want to delete this airplane? This action cannot be undone.');
      if (confirmed) {
        this.airplaneService.deleteAirplane(this.airplane.id).subscribe({
          next: () => {
            this.router.navigate(['/airplanes']);
          },
          error: (err) => {
            console.error('Error deleting airplane:', err);
            alert('Failed to delete the airplane from the server.');
          }
        });
      }
    }
  }




}

