import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje="curso de angular"
  // nombre = "Gonza"
  isValid=false
  cursos =['java','c++','javascript', 'Python']

  personas = [
    { id: 1, nombre:'Gonza', edad:39},
    { id: 1, nombre:'Puru', edad:39},
    { id: 1, nombre:'Rosa', edad:60},
    { id: 1, nombre:'Chari', edad:65}
  ]
  // getName(){
  //   return this.nombre
  // }


  eliminar(){
    this.cursos = []
  }
}
