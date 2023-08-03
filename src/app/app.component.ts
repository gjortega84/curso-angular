import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje="curso de angular"
  nombre = "Gonza"
  isValid=false
  cursos =['java','c++','javascript', 'Python']
  getName(){
    return this.nombre
  }


  eliminar(){
    this.cursos = ['java', 'c++', 'python', '.net']
  }
}
