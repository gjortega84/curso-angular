import { style } from '@angular/animations';
import { Element } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {
  constructor(private el: ElementRef) {}
 
  @Input('appCambiarColor') nuevoColor:any;

  
  @HostListener('mouseenter') onMouseEnter(): void{
    // this.el.nativeElement.style.backgroundColor = 'yellow'
    this.cambiarColor(this.nuevoColor)
   }

  @HostListener('mouseleave') inMouseLeave() {
    this.cambiarColor(null)
   }

   cambiarColor (color:any){
      this.el.nativeElement.style.backgroundColor= color
   }

}
