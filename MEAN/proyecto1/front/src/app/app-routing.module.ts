import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { HechizosComponent } from './components/core/hechizos/hechizos.component';
import { PersonajesComponent } from './components/core/personajes/personajes.component';
import { RegistroFormsModuleComponent } from './components/ant/registro-forms-module/registro-forms-module.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'registroModel', component: RegistroFormsModuleComponent },
    { path: 'ingreso', component: IngresoComponent },
    { path: 'hechizos', component: HechizosComponent },
    { path: 'personajes', component: PersonajesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
