import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

// Prueba para llamar a un método para vaalidar
let prueba = function( control: FormControl ): ValidationErrors | null {
  console.log( control.value );
  if ( control.value == 'javi' ) {
    return {nombreInvalido: true};
  } else {
    return null;
  }
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  textoError: string = 'Campo requerido';
  colorMsg: string = 'green';

  miForm: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, prueba ] ]
  });

  constructor( private fb: FormBuilder) { }

  tieneError( campo: string ): boolean {
    const campoNombre = this.miForm.get('nombre');
    //this._actualizaMensaje( campoNombre );
    
    // Se devuelve true o false 
    return campoNombre?.invalid || false;
  }
  ngOnInit(): void {
  }

  cambiarTexto() {
    this.textoError = Math.random().toString();
  }

  cambiarColorTexto() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorMsg = color;
  }

  // No funciona
  _actualizaMensaje( campoNombre: AbstractControl | null ) {
    const errores = campoNombre?.errors;
    console.log( errores );
    if (errores) {
      const keys = typeof(errores) == 'object' ? Object.keys(errores!) : null;
  
      if (campoNombre?.invalid) {
        if ( keys?.includes( 'required' ) ) {
          this.textoError = 'Campo requerido';
        } else if ( keys?.includes( 'nombreInvalido' ) ) {
          this.textoError = 'Javi ya está en uso';
        }
      }
    } else {
      this.textoError = '';
    }
  }

}
