import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje="curso de angulara"
  // nombre = "Gonza"
  isValid=false
  cursos =['java','c++','javascript', 'Python']

  personas = [
    { id: 1, nombre:'Gonza', edad:39},
    { id: 2, nombre:'Puru', edad:39},
    { id: 3, nombre:'Rosa', edad:60},
    { id: 4, nombre:'Chari', edad:65}
  ]
  // getName(){
  //   return this.nombre
  // }

index=0
  eliminar(){
    this.cursos = []
  }

  onAgregar(){
    this.personas.push({id: this.personas.length, nombre:'Nombre' + this.personas.length, edad: 20+this.personas.length})
  }

  onBorrar(persona:any){
    this.index=this.personas.indexOf(persona)
    this.personas.splice(this.index , 1)

  }

  onEdit(persona:any){
    this.index=this.personas.indexOf(persona)
    this.isValid =this.isValid? false:true
  }
}
