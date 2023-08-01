import { CSP_NONCE, Component } from '@angular/core';

@Component({
  selector: 'app-clase12',
  templateUrl: './clase12.component.html',
  styleUrls: ['./clase12.component.css']
})
export class Clase12Component {
  onKeyup()
  {
    console.log("enter presionado");
  }

}
