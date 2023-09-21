import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PersonajesService } from "src/app/services/personajes.service";

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
    @ViewChild('audioPlayer') btnAudio!: ElementRef;

    audio: HTMLAudioElement;

    constructor(private _personajeService: PersonajesService) {
        this.audio = new Audio();
        this.audio.src = 'assets/audio/song-skyrim.mp3';
        // this.audio.play();
    }

    ngOnInit():void{
        this.obtenerPersonajes()
    }

    obtenerPersonajes(){
        this._personajeService.getPersonajes().subscribe(data => {
            console.log(data)
        }, error => {
            console.log(error)
        })
    }

    audioPagina() {
        if (this.audio.paused) {
            this.btnAudio.nativeElement.classList.add('fa-circle-pause')
            this.btnAudio.nativeElement.classList.remove('fa-circle-play')
            this.audio.play();
        } else {
            this.btnAudio.nativeElement.classList.remove('fa-circle-pause')
            this.btnAudio.nativeElement.classList.add('fa-circle-play')
            this.audio.pause();
        }
    }
}
