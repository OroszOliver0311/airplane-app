import { Routes } from '@angular/router';
import { AirplaneListComponent } from './components/airplane-list/airplane-list';
import { AirplaneDetailComponent } from './components/airplane-detail/airplane-detail';

export const routes: Routes = [

  { path: 'airplanes', component: AirplaneListComponent },
  

  { path: 'airplanes/:id', component: AirplaneDetailComponent },
  

  { path: '', redirectTo: '/airplanes', pathMatch: 'full' }
    
];
