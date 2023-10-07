import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';
import { Error404Component } from './components/error404/error404.component';
import { TablaMultiplicarComponent } from './components/ejemplos/tabla-multiplicar/tabla-multiplicar.component';
import { MisLikesComponent } from './components/ejemplos/mis-likes/mis-likes.component';
import { GestionEmpanadasComponent } from './components/admin/gestion-empanadas/gestion-empanadas.component';
import { autenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'empanadas', component: ProductosComponent},
    {path: 'ingreso', component: IngresoComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'admin/usuarios-registrados', canMatch:[autenticacionGuard], component: ListaUsuariosComponent},
    {path: 'editar-info-usuario/:id', component: RegistroComponent},
    {path: '404', component: Error404Component},
    {path: 'ejemplo/tabla-multiplicar', component: TablaMultiplicarComponent},
    {path: 'ejemplo/like', component: MisLikesComponent},
    {path: 'admin/gestion-empanadas', component: GestionEmpanadasComponent},
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
