import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  titulo = 'Formulario Template';
  objUsuario = {
    usuario: '',
    clave: '',
    nombre: '',
    correo: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(usuarioForm: NgForm) {
    console.log(usuarioForm);
    console.log(usuarioForm.value);
  }

}
