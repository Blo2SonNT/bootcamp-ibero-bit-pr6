import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';
import { Error404Component } from './components/error404/error404.component';
import { TablaMultiplicarComponent } from './components/ejemplos/tabla-multiplicar/tabla-multiplicar.component';
import { MisLikesComponent } from './components/ejemplos/mis-likes/mis-likes.component';
import { GestionEmpanadasComponent } from './components/admin/gestion-empanadas/gestion-empanadas.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraNavegacionComponent,
        InicioComponent,
        ProductosComponent,
        IngresoComponent,
        RegistroComponent,
        PiePaginaComponent,
        ListaUsuariosComponent,
        Error404Component,
        TablaMultiplicarComponent,
        MisLikesComponent,
        GestionEmpanadasComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
