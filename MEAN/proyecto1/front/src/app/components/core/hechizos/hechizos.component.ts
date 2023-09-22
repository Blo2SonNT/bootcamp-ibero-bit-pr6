import { Component, OnInit } from '@angular/core';
import { Hechizos } from 'src/app/models/hechizo';
import { HechizosService } from "src/app/services/hechizos.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2'
@Component({
    selector: 'app-hechizos',
    templateUrl: './hechizos.component.html',
    styleUrls: ['./hechizos.component.css']
})

export class HechizosComponent implements OnInit {

    listaHechizos: Hechizos[] = [];

    // ? Atributos del formulario
    hechizoFormulario: FormGroup
    regexSoloNumeros = /^[0-9]+$/

    constructor(private _hechizosService: HechizosService, private fb: FormBuilder) {
        this.hechizoFormulario = this.fb.group({
            invocacion: ['', [Validators.required]],
            poder: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.min(5), Validators.max(100)]],
            mana: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.min(1), Validators.max(70)]],
        })
    }

    ngOnInit(): void {
        this.obtenerHechizos()
    }

    obtenerHechizos() {
        this._hechizosService.getHechizos().subscribe(data => {
            this.listaHechizos = data
            console.log(this.listaHechizos)
        }, error => {
            console.log(error)
        })
    }

    agregarHechizo() {
        let dataFormulario: Hechizos = this.hechizoFormulario.value
        this._hechizosService.postHechizos(dataFormulario).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Hechizo creado',
            })
            this.borrarFormulario()
            this.obtenerHechizos()
        }, error => {
            console.log(error)
        })
    }

    borrarFormulario() {
        this.hechizoFormulario.reset()
    }

}
