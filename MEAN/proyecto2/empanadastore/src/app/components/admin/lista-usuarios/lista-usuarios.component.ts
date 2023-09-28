import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from "src/app/services/usuario.service";
import Swal from 'sweetalert2'
@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

    listaUsuarios: Usuario[] = []

    constructor(private _usuarioService: UsuarioService) { }

    ngOnInit(): void {
        this.obtenerUsuarios()
    }

    obtenerUsuarios() {
        this._usuarioService.getUsuarios().subscribe(respuestaApi => {
            this.listaUsuarios = respuestaApi
            console.log(this.listaUsuarios)
        }, error => {
            console.log(error)
        })
    }

    eliminarUsuario(id: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el usuario?',
            text: "Tenga en cuenta que esta acción no sera reversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#11a811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            iconColor: '#db9a18'
        }).then((result) => {
            if (result.isConfirmed) {
                this._usuarioService.deleteUsuario(id).subscribe(respuestaApi => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario eliminado',
                        iconColor: '#2ce30b'
                    })
                    this.obtenerUsuarios()
                }, error => {
                    console.log(error)
                })
            }
        })
    }

}
