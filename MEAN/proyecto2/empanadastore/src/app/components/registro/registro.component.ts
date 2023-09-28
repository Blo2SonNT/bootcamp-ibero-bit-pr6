//cSpell:disable
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from "src/app/services/usuario.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'
@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

    @ViewChild('txtPass2') inputPass2!: ElementRef
    @ViewChild('alertPassword') alertPassword!: ElementRef

    usuarioForm: FormGroup;
    regexAlfabetico = /^[A-Za-z ]+$/
    regexPass = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[#%@*]).+$/
    // ejemploForm: FormGroup;

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router) {
        this.usuarioForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            correo: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(5)]], //, Validators.pattern(this.regexPass)
            direccion: ['', [Validators.required]],
            ciudad: ['', [Validators.required]]
        })
        // this.ejemploForm = this.fb.group({ })
    }

    registroUsuario() {
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

}


