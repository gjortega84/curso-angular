import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { CursosComponent2 } from './cursos/cursos.component';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosComponent2,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
