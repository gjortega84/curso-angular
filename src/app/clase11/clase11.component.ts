import { Component } from '@angular/core';

@Component({
  selector: 'app-clase11',
  templateUrl: './clase11.component.html',
  styleUrls: ['./clase11.component.css']
})
export class Clase11Component {
  isActive = false
  
  save(e:any){
    console.log(e)
  }
}
