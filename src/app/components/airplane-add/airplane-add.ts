import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';
import { AirplaneService } from '../../services/airplane';
import { Airplane } from '../../models/airplane.model';

@Component({
  selector: 'app-airplane-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './airplane-add.html',
  styleUrl: './airplane-add.css',
})
export class AirplaneAddComponent {
  private airplaneService = inject(AirplaneService);
  private router = inject(Router);

  airplaneForm = new FormGroup({
    tailNumber: new FormControl('', Validators.required),
    model: new FormControl('',Validators.required),
    manufacturer: new FormControl('',Validators.required),
    capacity: new FormControl(0,[Validators.required,Validators.min(1)]),
    status: new FormControl('active'), 
    maintenanceIntervalFlights: new FormControl(0,[Validators.required, Validators.min(1)]),
    flightsSinceLastMaintenance: new FormControl(0,[Validators.required, Validators.min(0)])
  });
  onSubmit() {
    if (this.airplaneForm.invalid) return;
    const newAirplane = this.airplaneForm.value as unknown as Airplane;
    
    this.airplaneService.addAirplane(newAirplane).subscribe({
      next: () => {
        this.router.navigate(['/airplanes']);
      },
      error: (err) => {
        console.error('Error adding airplane:', err);
        alert('Error adding airplane. Please try again.');
      }
    });
  }
}
