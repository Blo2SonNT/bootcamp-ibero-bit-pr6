import { Component, OnInit } from '@angular/core';
import { PersonajesService } from "src/app/services/personajes.service";
import { Personajes } from 'src/app/models/personajes';

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
    styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
    listaPersonajes: Personajes[] = [];
    constructor(private _personajeService: PersonajesService) {}

    ngOnInit(): void {
        this.obtenerPersonajes()
    }

    obtenerPersonajes() {
        this._personajeService.getPersonajes().subscribe(dataGato => {
            this.listaPersonajes = dataGato
        }, error => {
            console.log(error)
        })
    }
}
