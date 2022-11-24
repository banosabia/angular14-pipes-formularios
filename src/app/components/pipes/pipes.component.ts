import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = 'Capitán América';
  arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroes: string[] = ['Capitán América', 'Superman', 'Batman', 'Hulk', 'Thor'];
  fecha: Date = new Date();

  idioma: string = 'es';

  heroe = {
    nombre: 'Batman',
    edad: 25,
    direccion: {
      ciudad: 'Gotham City',
      calle: 'DC Street'
    }
  };
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
    }, 4500);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
