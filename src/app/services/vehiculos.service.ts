import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculos } from '../vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private baseURL = "http://localhost:8080/controlacceso";

  constructor(private httpClient:HttpClient) { }

  crearVehiculos(vehiculo:Vehiculos):Observable<Vehiculos[]>{
    return this.httpClient.post<Vehiculos[]>(`${this.baseURL}/crearVehiculo`,vehiculo);
  }
}