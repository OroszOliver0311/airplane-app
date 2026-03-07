import { Routes } from '@angular/router';
import { AirplaneListComponent } from './components/airplane-list/airplane-list';
import { AirplaneDetailComponent } from './components/airplane-detail/airplane-detail';
import { AirplaneAddComponent } from './components/airplane-add/airplane-add';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'airplanes', component: AirplaneListComponent,canActivate: [authGuard] },
  { path: 'airplanes/new', component: AirplaneAddComponent,canActivate: [authGuard] },
  { path: 'airplanes/:id', component: AirplaneDetailComponent,canActivate: [authGuard] },
  

  { path: '', redirectTo: '/airplanes', pathMatch: 'full' }
    
];
