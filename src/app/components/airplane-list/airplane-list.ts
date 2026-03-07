import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AirplaneService } from '../../services/airplane';
import { Airplane } from '../../models/airplane.model';
import { TailNumberPipe } from '../../pipes/tail-number-pipe';


@Component({
  selector: 'app-airplane-list',
  standalone: true,
  imports: [TailNumberPipe, RouterLink, NgClass],
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
