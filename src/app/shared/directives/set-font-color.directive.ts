import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[set-font-color]'
})
export class SetFontColorDirective implements OnInit{

  element: ElementRef<HTMLElement>;
  @Input() color: string = '#000';

  constructor( private elem: ElementRef<HTMLElement>) { 
    this.element = elem;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.element.nativeElement.style.color = this.color;
  }

}
