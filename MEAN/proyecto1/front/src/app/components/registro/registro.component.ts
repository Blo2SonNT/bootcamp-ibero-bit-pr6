import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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


    constructor(private fb: FormBuilder){

        this.formularioRegistro = this.fb.group({
            nombre : ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            edad : ['', [Validators.required, Validators.pattern(this.regexSoloNumeros)]],
            url_imagen: ['assets/img/imgDefecto/png', [Validators.required]]
        })

    }

    enviarFormulario(){
        console.log(this.formularioRegistro)
    }

    cambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

    cambiarImagen(){
        this.imagenFeminista.nativeElement.src = 'assets/img/feminista/2.jpg'
    }
}
