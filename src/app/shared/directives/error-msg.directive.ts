import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElem: ElementRef<HTMLElement>;
  _msg: string = 'Texto inicial';
  _color: string = 'red';
  _esValido: boolean = true;

  @Input() set msg( texto: string ) {
    this._msg = texto;
    this.setMsg();
  }
  @Input() set color( color: string) {
    this._color = color;
    this.setColor();
  }
  @Input() set valido( esValido: boolean ) {
    this._esValido = esValido;
    this.comprobarValido()
  }

  // Solucion Javi: Se mantienen actualizados ya que viene con @Input
  // @Input() msg: string = '';
  // @Input() color: string = 'red';
  
  constructor( private elem: ElementRef<HTMLElement>) {
    this.htmlElem = elem;
  }
  
  ngOnInit(): void {
    this.setMsg();
    this.setColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Solucion Javi : Se actualizan en cada cambio
    // this.setMsg();
    // this.setColor();
  }

  setMsg(): void {
    this.elem.nativeElement.innerHTML = this._msg;
  }

  setColor(): void {
    this.elem.nativeElement.style.color = this._color;
  }

  comprobarValido(): void {
    this.elem.nativeElement.hidden = !this._esValido;
  }

}
