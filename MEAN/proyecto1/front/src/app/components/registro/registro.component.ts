import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    // let miElemento = document.querySelector('#miElemento')
    @ViewChild('miElemento') miCuadro!: ElementRef
    @ViewChild('feminista') imagenFeminista!: ElementRef

    nombre?: string
    apellido?: string

    enviarFormulario(){
        console.log(`{
            nombre: ${this.nombre},
            apellido: ${this.apellido}
        }`)
    }

    cambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

    cambiarImagen(){
        this.imagenFeminista.nativeElement.src = 'assets/img/feminista/2.jpg'
    }
}
