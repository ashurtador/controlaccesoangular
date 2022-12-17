import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Peatones } from '../peatones';
import { PeatonesService } from '../services/peatones.service';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculos } from '../vehiculos';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  peatones:Peatones[];
  vehiculos:Vehiculos[];

  nuevoPeaton : Peatones = new Peatones ();
  nuevoVehiculo : Vehiculos = new Vehiculos ();

  constructor(private peatonesServicio:PeatonesService, 
    private vehiculosServicio:VehiculosService,
    private router:Router) { }

  ngOnInit(): void {

  }

  public registrarPeaton(peaton:Peatones){
    this.peatonesServicio.crearPeaton(peaton).subscribe(datop=>{
      this.peatones=datop;
    });
  }

  registrarVehiculo(vehiculo:Vehiculos){
    this.vehiculosServicio.crearVehiculos(vehiculo).subscribe(datov=>{
      this.vehiculos=datov;
    });
  }

  onSubmit(){
  }
}
