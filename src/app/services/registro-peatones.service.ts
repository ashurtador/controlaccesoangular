import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroPeatones } from '../registro-peatones';

@Injectable({
  providedIn: 'root'
})
export class RegistroPeatonesService {

private baseURL = "http://localhost:8080/controlacceso";
  
constructor(private httpClient: HttpClient) { }

crearRegistroPeaton(registroPeaton:RegistroPeatones):Observable<RegistroPeatones[]>{
  return this.httpClient.post<RegistroPeatones[]>(`${this.baseURL}/crearRegistroPeaton`, registroPeaton);
}
}
