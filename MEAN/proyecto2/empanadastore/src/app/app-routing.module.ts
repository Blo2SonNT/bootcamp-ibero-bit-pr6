import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'empanadas', component: ProductosComponent},
    {path: 'ingreso', component: IngresoComponent},
    {path: 'registro', component: RegistroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
