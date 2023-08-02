import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
@Input('persona') aliaspersona:any;
@Output() enviar = new EventEmitter<String>();
mensaje = "soy son"

ejecutarEvento(){
  this.enviar.emit(this.mensaje)
}
}
