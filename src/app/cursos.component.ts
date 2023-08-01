import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({ 
    selector:'cursos',
    template: `
    <h1>
    Cursos:
    </h1>
    <p>TypeScript</p>
    `
    ,
    styles:['h1 {color:red;}']
})

export class CursosComponent{

}