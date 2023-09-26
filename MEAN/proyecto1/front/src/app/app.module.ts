import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';

import { HttpClientModule } from "@angular/common/http";
import { PersonajesComponent } from './components/core/personajes/personajes.component';
import { HechizosComponent } from './components/core/hechizos/hechizos.component';
import { RegistroFormsModuleComponent } from './components/ant/registro-forms-module/registro-forms-module.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraNavegacionComponent,
        InicioComponent,
        PiePaginaComponent,
        RegistroComponent,
        IngresoComponent,
        PersonajesComponent,
        HechizosComponent,
        RegistroFormsModuleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
