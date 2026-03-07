import { Component, inject, OnInit } from '@angular/core';
import { AirplaneService } from '../../services/airplane';
import { Airplane } from '../../models/airplane.model';

@Component({
  selector: 'app-airplane-list',
  standalone: true,
  templateUrl: './airplane-list.html',
  styleUrl: './airplane-list.css',
})
export class AirplaneListComponent implements OnInit {
private airplaneService = inject(AirplaneService);

airplanes: Airplane[] = [];

ngOnInit(): void {
    this.airplanes = this.airplaneService.getAirplanes();
}




}
