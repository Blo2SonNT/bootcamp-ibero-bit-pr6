import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tabla-multiplicar',
    templateUrl: './tabla-multiplicar.component.html',
    styleUrls: ['./tabla-multiplicar.component.css']
})
export class TablaMultiplicarComponent {

    @ViewChild('tablas') divTablas!: ElementRef
    numeroTabla!:number
    limiteTabla!:number


    constructor(){}

    calcularTabla(){
        for (let x = 1; x <= this.limiteTabla; x++) {
            this.divTablas.nativeElement.innerHTML += `
                <div> ${this.numeroTabla} X ${x} = ${x * this.numeroTabla}</div>
            `
        }
    }


}
