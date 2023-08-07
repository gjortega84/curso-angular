import { CambiarColorDirective } from './cambiar-color.directive';
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
  color=""
  cursos =['java','c++','javascript', 'Python']

  personas = [
    { id: 1, nombre:'Gonza', edad:39, hobbie:'sing'},
    { id: 2, nombre:'Puru', edad:39, hobbie:'dance'},
    { id: 3, nombre:'Rosa', edad:60, hobbie:'run'},
    { id: 4, nombre:'Chari', edad:65, hobbie:'ride bykes'}
  ]
  // getName(){
  //   return this.nombre
  // }

index=0
  eliminar(){
    this.cursos = []
  }

  onAgregar(){
    // this.personas.push({id: this.personas.length, nombre:'Nombre' + this.personas.length, edad: 20+this.personas.length})
  }

  onBorrar(persona:any){
    this.index=this.personas.indexOf(persona)
    this.personas.splice(this.index , 1)

  }

  onEdit(persona:any){
    this.index=this.personas.indexOf(persona)
    this.isValid =this.isValid? false:true
  }

  getColor(hobbie:any){
    switch(hobbie){
      case  "sing":
       return 'red'
        break;
        default:
      return'black'
    }
  }
}
