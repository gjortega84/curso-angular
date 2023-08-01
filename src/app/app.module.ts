import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { CursosComponent2 } from './cursos/cursos.component';
import { ImagenComponent } from './imagen/imagen.component';
import { BotonComponent } from './boton/boton.component';
import { Clase11Component } from './clase11/clase11.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosComponent2,
    ImagenComponent,
    BotonComponent,
    Clase11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
