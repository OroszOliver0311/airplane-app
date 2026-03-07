import { Routes } from '@angular/router';
import { AirplaneListComponent } from './components/airplane-list/airplane-list';
import { AirplaneDetailComponent } from './components/airplane-detail/airplane-detail';
import { AirplaneAddComponent } from './components/airplane-add/airplane-add';
import { LoginComponent } from './components/login/login';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'airplanes', component: AirplaneListComponent },
  { path: 'airplanes/new', component: AirplaneAddComponent },
  { path: 'airplanes/:id', component: AirplaneDetailComponent },
  

  { path: '', redirectTo: '/airplanes', pathMatch: 'full' }
    
];
