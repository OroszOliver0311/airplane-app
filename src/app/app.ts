import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirplaneListComponent } from './components/airplane-list/airplane-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AirplaneListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('airplane-app');
}
