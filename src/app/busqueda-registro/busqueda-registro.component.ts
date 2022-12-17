import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaPeatones } from '../busqueda-peatones';
import { BusquedaVehiculos } from '../busqueda-vehiculos';
import { RegistroPeatones } from '../registro-peatones'; 
import { RegistroVehiculos } from '../registro-vehiculos';
import { BusquedaPeatonesService } from '../services/busqueda-peatones.service';
import { BusquedaVehiculosService } from '../services/busqueda-vehiculos.service';

@Component({
  selector: 'app-busqueda-registro',
  templateUrl: './busqueda-registro.component.html',
  styleUrls: ['./busqueda-registro.component.css']
})
export class BusquedaRegistroComponent implements OnInit {

  resultadoRegistroPeatones:RegistroPeatones[];
  resultadoRegistroVehiculos:RegistroVehiculos[];
  cedulaBusqueda:string = "";
  placaBusqueda:string ="";

  constructor(private busquedaPeatonesServicio:BusquedaPeatonesService, 
    private busquedaVehiculosServicios:BusquedaVehiculosService,
    private router:ActivatedRoute) {}

  ngOnInit(): void {
  /*  this.cedulaBusqueda=this.router.snapshot.params['id'];
    this.resultadoRegistroPeatones = new RegistroPeatones;
    this.busquedaPeatonesServicio.getRegistroPeatonByCedula(this.cedulaBusqueda).subscribe(dato=>{
      this.resultadoRegistroPeatones =dato;
    })
    */
  }

  obtenerRegistroPeatonesCedula(cedulaBusqueda: string){
    this.busquedaPeatonesServicio.getRegistroPeatonByCedula(cedulaBusqueda).subscribe(datop =>{
      this.resultadoRegistroPeatones=datop;
      console.log(datop)
    });
  }

  obtenerRegistroVehiculosPlaca(placaBusqueda: string){
    this.busquedaVehiculosServicios.getRegistroVehiculoByPlaca(placaBusqueda).subscribe(datov=>{
      this.resultadoRegistroVehiculos=datov;
      console.log(datov)
    });
  }

  onSubmit(){
  }
}