import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-mis-likes',
    templateUrl: './mis-likes.component.html',
    styleUrls: ['./mis-likes.component.css']
})
export class MisLikesComponent {
    cantidadLikes_x_click: number = 0

    @ViewChild('btnLike') btnLike!: ElementRef
    like_x_usuario : number = 0
    conLike!: string | null

    constructor(){}

    sumarLike(){
        this.cantidadLikes_x_click++
    }

    accionBoton(){
        if(localStorage.getItem('leDioLike') == null || localStorage.getItem('leDioLike') == 'no'){
            localStorage.setItem('leDioLike', 'si')
            this.like_x_usuario++
            this.btnLike.nativeElement.style = 'opacity: 0.5'
        }else{
            localStorage.setItem('leDioLike', 'no')
            this.like_x_usuario--
            this.btnLike.nativeElement.style = 'opacity: 1'
        }
    }
}
