import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
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
  private route = inject(ActivatedRoute);
  isEditMode = false;
  editId: string | null = null;

  airplaneForm = new FormGroup({
    tailNumber: new FormControl('', Validators.required),
    model: new FormControl('',Validators.required),
    manufacturer: new FormControl('',Validators.required),
    capacity: new FormControl(0,[Validators.required,Validators.min(1)]),
    status: new FormControl('active'), 
    maintenanceIntervalFlights: new FormControl(0,[Validators.required, Validators.min(1)]),
    flightsSinceLastMaintenance: new FormControl(0,[Validators.required, Validators.min(0)])
  });
  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');
    
    if (this.editId) {
      this.isEditMode = true;
      this.airplaneService.getById(this.editId).subscribe({
        next: (plane) => {
          this.airplaneForm.patchValue(plane);
        },
        error: () => alert('Error loading airplane data')
      });
    }
  }
  onSubmit() {
  if (this.airplaneForm.invalid) return;


  const formValues = this.airplaneForm.value;
  const flights = Number(formValues.flightsSinceLastMaintenance);
  const interval = Number(formValues.maintenanceIntervalFlights);
  
  const calculatedStatus = flights >= interval ? 'maintenance' : 'active';
  const airplaneData = {
    ...formValues,
    capacity: Number(formValues.capacity),
    maintenanceIntervalFlights: interval,
    flightsSinceLastMaintenance: flights,
    status: calculatedStatus 
  } as unknown as Airplane;

  if (this.isEditMode && this.editId) {
    this.airplaneService.updateAirplane(this.editId, airplaneData).subscribe({
      next: () => {
        this.router.navigate(['/airplanes', this.editId]); 
      },
      error: (err) => {
        console.error('Error updating airplane:', err);
        alert('Failed to update airplane. Please try again.');
      }
    });
  } else {
    this.airplaneService.addAirplane(airplaneData).subscribe({
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
}