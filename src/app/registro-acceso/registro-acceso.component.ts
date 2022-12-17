import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroPeatones } from '../registro-peatones';
import { RegistroVehiculos } from '../registro-vehiculos';
import { RegistroPeatonesService } from '../services/registro-peatones.service';
import { RegistroVehiculosService } from '../services/registro-vehiculos.service';

@Component({
  selector: 'app-registro-acceso',
  templateUrl: './registro-acceso.component.html',
  styleUrls: ['./registro-acceso.component.css']
})
export class RegistroAccesoComponent implements OnInit {

    registroPeatones:RegistroPeatones[];
    registroVehiculos:RegistroVehiculos[];

    nuevoRegistroPeaton: RegistroPeatones= new RegistroPeatones();
    nuevoRegistroVehiculo: RegistroVehiculos= new RegistroVehiculos();

  constructor(private registroPeatonesServicio:RegistroPeatonesService, 
    private registroVehiculosServicio:RegistroVehiculosService,
    private router:Router) { }

  ngOnInit(): void {
  
  }

  public registrarAccesoPeaton(nuevoRegistroPeaton:RegistroPeatones){
    //this.nuevoRegistroPeaton.cedula = cedula;
    this.registroPeatonesServicio.crearRegistroPeaton(this.nuevoRegistroPeaton).subscribe(datop=>{
      console.log(datop);
    },error=>console.log(error));
  }

  public registarAccesoVehiculo(nuevoRegistroVehiculo:RegistroVehiculos){
    //this.nuevoRegistroVehiculo.placa=placa;
    this.registroVehiculosServicio.crearRegistroPeaton(this.nuevoRegistroVehiculo).subscribe(datov=>{
      console.log(datov);
    },error=>console.log(error));
  }

  mostrarRegistros(){
    this.router.navigate(['/busquedaRegistro'])
  }
 
  onSubmit(){
  }
  
  }
