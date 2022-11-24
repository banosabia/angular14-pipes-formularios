import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioTemplateComponent } from './components/formularios/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formularios/formulario-reactivo/formulario-reactivo.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './components/pipes/pipes-personalizados/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent,
    PipesComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
