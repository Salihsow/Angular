import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'rgba(0,200,0,0.5)';
  constructor() { 
     
  }
  @HostListener('mouseenter') mouseenter(){
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(){
    this.bg = 'rgba(0,200,0,0.5)';
  }

}
