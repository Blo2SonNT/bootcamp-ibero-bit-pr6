import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmpanadaService } from 'src/app/services/empanada.service';
import { Empanada } from "../../models/Empanada";
@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
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
