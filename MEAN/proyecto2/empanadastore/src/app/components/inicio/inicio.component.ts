import { Component, OnInit } from '@angular/core';
import { Empanada } from 'src/app/models/Empanada';
import { EmpanadaService } from 'src/app/services/empanada.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

    listaEmpanadas : Empanada[] = []

    constructor(private _empanadaService: EmpanadaService) {}

    ngOnInit(): void {
        this.obtenerEmpanadas()
    }

    obtenerEmpanadas() {
        this._empanadaService.getEmpanadas().subscribe(respuestaApi => {
            this.listaEmpanadas = respuestaApi
            console.log(this.listaEmpanadas)
        }, error => {
            console.log(error)
        })
    }

}
