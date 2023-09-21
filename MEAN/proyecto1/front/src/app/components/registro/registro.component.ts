import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Personajes } from "src/app/models/personajes";
import { PersonajesService } from "src/app/services/personajes.service";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    // let miElemento = document.querySelector('#miElemento')
    @ViewChild('miElemento') miCuadro!: ElementRef
    @ViewChild('feminista') imagenFeminista!: ElementRef


    formularioRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexSoloNumeros = /^[0-9]+$/


    constructor(private fb: FormBuilder, private _personajeService: PersonajesService){

        this.formularioRegistro = this.fb.group({
            nombre : ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            edad : ['', [Validators.required, Validators.pattern(this.regexSoloNumeros)]],
            urlImagen: ['assets/img/imgDefecto/png', [Validators.required]]
        })

    }

    enviarFormulario(){
        // ? Manera en la que tomamos todos los valores del formulario sin validar los tipos de dato
        /* let manera1 = this.formularioRegistro.value  */

        // ? Manera en la que armamos el JSON que requiere la API para usar sus endpoints (Normalmente se hace de esta manera cuando el formulario tiene campos que no necesitamos enviar a la API)
        /*
        const personajeFormulario: Personajes = {
            nombre: this.formularioRegistro.get('nombre')?.value,
            edad: this.formularioRegistro.get('edad')?.value,
            urlImagen: this.formularioRegistro.get('url_imagen')?.value
        }
        */

        // ? Manera en la cual tomamos todos los campos del formulario y validamos la estructura con el modelo creado
        let formularioData : Personajes = this.formularioRegistro.value

        this._personajeService.postPersonaje(formularioData).subscribe(data => {
            alert("personaje creado")
            console.log(data)
        }, error => {
            console.log(error)
        })

    }

    cambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

    cambiarImagen(){
        this.imagenFeminista.nativeElement.src = 'assets/img/feminista/2.jpg'
    }
}
