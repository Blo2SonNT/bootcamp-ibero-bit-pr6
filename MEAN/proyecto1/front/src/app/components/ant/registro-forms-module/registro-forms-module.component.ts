import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-registro-forms-module',
    templateUrl: './registro-forms-module.component.html',
    styleUrls: ['./registro-forms-module.component.css']
})
export class RegistroFormsModuleComponent implements OnInit {
    nombre?: string
    apellido?: string
    id?: any

    constructor() { }

    ngOnInit(): void {
        this.id = "asdasd3qe123"
    }

    enviarFormulario() {
        console.log(`
            {
                nombre: ${this.nombre},
                apellido: ${this.apellido},
                id: ${this.id}
            }
        `)
    }
}
