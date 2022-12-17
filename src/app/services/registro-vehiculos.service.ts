import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroVehiculos } from '../registro-vehiculos';

@Injectable({
  providedIn: 'root'
})
export class RegistroVehiculosService {

  private baseURL = "http://localhost:8080/controlacceso";

  constructor(private httpClient: HttpClient) { }

  crearRegistroPeaton(registroVehiculos:RegistroVehiculos):Observable<RegistroVehiculos[]>{
    return this.httpClient.post<RegistroVehiculos[]>(`${this.baseURL}/crearRegistroVehiculo`,registroVehiculos);
  }
}
