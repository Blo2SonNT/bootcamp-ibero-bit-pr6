import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { HechizosComponent } from './components/core/hechizos/hechizos.component';
import { PersonajesComponent } from './components/core/personajes/personajes.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ingreso', component: IngresoComponent },
    { path: 'hechizos', component: HechizosComponent },
    { path: 'personajes', component: PersonajesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
