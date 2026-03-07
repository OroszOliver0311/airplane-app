import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; 
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
    tailNumber: new FormControl(''),
    model: new FormControl(''),
    manufacturer: new FormControl(''),
    capacity: new FormControl(0),
    status: new FormControl('active'), // Alapból legyen aktív
    maintenanceIntervalFlights: new FormControl(0),
    flightsSinceLastMaintenance: new FormControl(0)
  });
  onSubmit() {
    const newAirplane = this.airplaneForm.value as unknown as Airplane;
    this.airplaneService.addAirplane(newAirplane);
    this.router.navigate(['/airplanes']);
  }
}
