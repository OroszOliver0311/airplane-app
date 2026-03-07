import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
private cdr = inject(ChangeDetectorRef);
airplanes: Airplane[] = [];
isLoading = true; 
errorMessage = '';

ngOnInit(): void {
  this.airplaneService.getAirplanes().subscribe({
      next: (data) => { 
        this.airplanes = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.errorMessage = 'Failed to load';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error('API Error:', error);
      }
    })
}




}
