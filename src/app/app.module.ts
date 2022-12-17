import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroAccesoComponent } from './registro-acceso/registro-acceso.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { BusquedaRegistroComponent } from './busqueda-registro/busqueda-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistroAccesoComponent,
    RegistroUsuarioComponent,
    BusquedaRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
