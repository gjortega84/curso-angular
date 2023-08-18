import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { CursosComponent2 } from './cursos/cursos.component';
import { ImagenComponent } from './imagen/imagen.component';
import { BotonComponent } from './boton/boton.component';
import { Clase11Component } from './clase11/clase11.component';
import { Clase12Component } from './clase12/clase12.component';
import { Clase15Component } from './clase15/clase15.component';
import { Clase21Component } from './clase21/clase21.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CambiarColorDirective } from './cambiar-color.directive';
import { ResumirPipe } from './resumir.pipe';
import { NuevoPipe } from './nuevo.pipe';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosComponent2,
    ImagenComponent,
    BotonComponent,
    Clase11Component,
    Clase12Component,
    Clase21Component,
    Clase15Component,
    UsuarioComponent,
    CambiarColorDirective,
    ResumirPipe,
    NuevoPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
