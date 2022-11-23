import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioTemplateComponent } from './components/formularios/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formularios/formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
