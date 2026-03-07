import { inject, Injectable } from '@angular/core';
import { Airplane } from '../models/airplane.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AirplaneService {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:3000/api/airplanes';


getAirplanes(): Observable<Airplane[]> {

  return this.http.get<Airplane[]>(this.apiUrl);
}
/*private airplanes : Airplane[] =[
  { id: '1', tailNumber: 'N12345', model: '737-800', manufacturer: 'Boeing', capacity: 189, status: 'active', maintenanceIntervalFlights: 100, flightsSinceLastMaintenance: 45 },
  { id: '2', tailNumber: 'N67890', model: 'A320', manufacturer: 'Airbus', capacity: 180, status: 'active', maintenanceIntervalFlights: 100, flightsSinceLastMaintenance: 92 },
  { id: '3', tailNumber: 'N11111', model: '787-9', manufacturer: 'Boeing', capacity: 296, status: 'maintenance', maintenanceIntervalFlights: 100, flightsSinceLastMaintenance: 100 },
]*/
addAirplane(airplane: Airplane): Observable<Airplane> {
  return this.http.post<Airplane>(this.apiUrl, airplane);
}
incrementFlights(id: string): Observable<Airplane> {
    return this.http.post<Airplane>(`${this.apiUrl}/${id}/increment-flights`, {});
  }

getById(id: string): Observable<Airplane>{
  return this.http.get<Airplane>(`${this.apiUrl}/${id}`);
}
updateAirplane(id: string, airplane: Airplane): Observable<Airplane> {
  return this.http.put<Airplane>(`${this.apiUrl}/${id}`, airplane);
}
}