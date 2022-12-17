import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaRegistroComponent } from './busqueda-registro/busqueda-registro.component';
import { RegistroAccesoComponent } from './registro-acceso/registro-acceso.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path : 'registroAcceso', component:RegistroAccesoComponent },
  {path : 'registroUsuario', component:RegistroUsuarioComponent},
  {path: 'busquedaRegistro', component:BusquedaRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
