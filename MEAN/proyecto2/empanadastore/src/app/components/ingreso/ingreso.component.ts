import { Component } from '@angular/core';
import { UsuarioService } from "src/app/services/usuario.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'
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

    constructor(private _usuarioService: UsuarioService, private router: Router){}

    ingresoUsuario(){
        this._usuarioService.postIngresoCuenta(this.userFormLogin).subscribe(respuestaAPI => {
            sessionStorage.setItem('tokenIngresoPepeA', respuestaAPI.token)
            this.router.navigate(['/'])
        }, erro => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña inválidos',
                iconColor: '#ff0d0d'
            })
        })
    }

}
