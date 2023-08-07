import { style } from '@angular/animations';
import { Element } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter(): void{
    this.el.nativeElement.style.backgroundColor = 'yellow'
   }

  @HostListener('mouseleave') inMouseLeave() {
    this.el.nativeElement.style.backgroundColor=null
   }

}
