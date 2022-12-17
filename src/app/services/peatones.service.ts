import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Peatones } from '../peatones';

@Injectable({
  providedIn: 'root'
})
export class PeatonesService {

  private baseURL = "http://localhost:8080/controlacceso";

  constructor(private httpClient:HttpClient) { }

  crearPeaton(peaton:Peatones):Observable<Peatones[]>{
    return this.httpClient.post<Peatones[]>(`${this.baseURL}/crearPeaton`,peaton);
  }
}