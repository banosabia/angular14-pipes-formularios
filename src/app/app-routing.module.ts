import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { FormularioReactivoComponent } from './components/formularios/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './components/formularios/formulario-template/formulario-template.component';
import { HomeComponent } from './components/home/home.component';
import { NgifelseComponent } from './components/ngifelse/ngifelse.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'formulario-template', component: FormularioTemplateComponent },
  { path: 'formulario-reactivo', component: FormularioReactivoComponent },
  { path: 'ngifelse', component: NgifelseComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
