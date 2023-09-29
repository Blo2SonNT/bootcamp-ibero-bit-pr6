//cSpell:disable
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from "src/app/services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'
@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPassword') alertPassword!: ElementRef

    usuarioForm: FormGroup;
    regexAlfabetico = /^[A-Za-z ]+$/
    regexPass = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[#%@*]).+$/
    idUsuarioUrl: string | null
    tituloPagina: string = 'Crear cuenta'
    txtBoton: string = 'Registrase'
    // ejemploForm: FormGroup;

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.usuarioForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            correo: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(5)]], //, Validators.pattern(this.regexPass)
            direccion: ['', [Validators.required]],
            ciudad: ['', [Validators.required]]
        })
        // this.ejemploForm = this.fb.group({ })


        this.idUsuarioUrl = this.idUsuarioRuta.snapshot.paramMap.get('id')


    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    registroUsuario() {
        if (this.idUsuarioUrl == null) {
            if (this.rectificarPass()) {
                this._usuarioService.postUsuario(this.usuarioForm.value).subscribe(respuestaApi => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Creado',
                        iconColor: '#2ce30b'
                    })
                    this.router.navigate(['/ingreso'])
                })
            } else {
                console.log('%c Contraseña invalida!!', 'color: red; font-size:2rem;')
            }
        } else {
            if (this.rectificarPass()) {
                this._usuarioService.putUsuario(this.idUsuarioUrl, this.usuarioForm.value).subscribe(respuestaApi => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Actualizado',
                        iconColor: '#2ce30b'
                    })
                    this.router.navigate(['/admin/usuarios-registrados'])
                })
            } else {
                console.log('%c Contraseña invalida!!', 'color: red; font-size:2rem;')
            }
        }
    }

    rectificarPass() {
        let passUsuario = this.usuarioForm.get('password')?.value
        if (passUsuario != this.inputPass2.nativeElement.value) {
            this.alertPassword.nativeElement.classList.remove('d-none')
            return false
        } else {
            this.alertPassword.nativeElement.classList.add('d-none')
            return true
        }
    }

    accionSolicitada() {
        if (this.idUsuarioUrl != null) {
            this.tituloPagina = "Actualizar usuario"
            this.txtBoton = "Guardar cambios"
            this._usuarioService.getUsuario(this.idUsuarioUrl).subscribe(respuestaApi => {
                this.usuarioForm.setValue({
                    nombre: respuestaApi.nombre,
                    apellido: respuestaApi.apellido,
                    correo: respuestaApi.correo,
                    password: '',
                    direccion: respuestaApi.direccion,
                    ciudad: respuestaApi.ciudad
                })
            }, error => {
                this.router.navigate(['/404'])
            })
        }
    }

}


