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
  getName(){
    return this.nombre
  }

}
