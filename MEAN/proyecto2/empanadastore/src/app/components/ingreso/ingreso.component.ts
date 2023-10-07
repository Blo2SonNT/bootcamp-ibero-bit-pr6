import { Component } from '@angular/core';
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

    userFormLogin = {
        correo: '',
        password: ''
    }

    constructor(private _usuarioService: UsuarioService){}

    ingresoUsuario(){
        this._usuarioService.postIngresoCuenta(this.userFormLogin).subscribe(respuestaAPI => {
            sessionStorage.setItem('tokenIngresoPepeA', respuestaAPI.token)
        }, err => {console.log(err)})
    }

}
