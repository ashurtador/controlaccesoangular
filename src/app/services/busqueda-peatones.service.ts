import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegistroPeatones } from '../registro-peatones';

@Injectable({
  providedIn: 'root'
})
export class BusquedaPeatonesService {

  private baseURL = "http://localhost:8080/controlacceso";

  constructor(private httpClient:HttpClient) { }

  getRegistroPeatonByCedula(cedula:string):Observable<RegistroPeatones[]>{
    return this.httpClient.get<RegistroPeatones[]>(`${this.baseURL}/getRegistroPeatonByCedula/${cedula}`);
  }
} 
