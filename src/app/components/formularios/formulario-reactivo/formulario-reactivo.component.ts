import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  titulo = 'Formulario Reactivo';
  usuarioForm: FormGroup;

  constructor(private fg: FormBuilder) {

    this.usuarioForm = this.fg.group({
      usuario:  ['', Validators.required],
      clave:    ['', [Validators.required, Validators.minLength(8)]],
      nombre:   ['', Validators.required],
      email:    ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]]
    });
   }

  ngOnInit(): void {
  }

  esCampoInvalido(nombreCampo: string) {
    return this.usuarioForm.get(nombreCampo)?.invalid && this.usuarioForm.get(nombreCampo)?.touched;
  }

  enviarFormulario() {
    console.log(this.usuarioForm);
  }

}
