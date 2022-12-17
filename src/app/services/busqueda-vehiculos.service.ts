import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegistroVehiculos } from '../registro-vehiculos';

@Injectable({
  providedIn: 'root'
})
export class BusquedaVehiculosService {

  private baseURL = "http://localhost:8080/controlacceso";

  constructor(private httpClient:HttpClient) {}

  getRegistroVehiculoByPlaca(placa:string):Observable<RegistroVehiculos[]> {
    return this.httpClient.get<RegistroVehiculos[]>(`${this.baseURL}/getRegistroVehiculoByPlaca/${placa}`);
  }
} 
