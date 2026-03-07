import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-maintenance-status-bar',
  standalone: true,
  templateUrl: './maintenance-status-bar.html',
  styleUrl: './maintenance-status-bar.css',
})
export class MaintenanceStatusBarComponent {
@Input({ required: true}) interval!: number;
@Input({ required: true}) currentFlights!: number;
@Input() status?: string;

@Output() flightAdded = new EventEmitter<void>();

getPercentage(): number {
    if(!this.interval) return 0;
  const percentage = this.currentFlights/ this.interval;
  return Math.min(percentage*100, 100);
}
  getColor(): string {  
  const percentage = this.getPercentage();
  if(percentage == 100) return '#f44336';
  if (percentage >= 75) return '#ff9800';  
    return '#4caf50';}
onAddClick(): void {
    this.flightAdded.emit();
  }
}
