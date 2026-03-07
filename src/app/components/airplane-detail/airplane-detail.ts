import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  airplane: Airplane | undefined;

ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.airplane = this.airplaneService.getById(id);
    }
  }
onFlightAdded(): void {
    if (this.airplane) {
      this.airplane.flightsSinceLastMaintenance++;
      
      if (this.airplane.flightsSinceLastMaintenance >= this.airplane.maintenanceIntervalFlights) {
        this.airplane.status = 'maintenance';
      }
    }
  }
}

