import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
    @ViewChild('audioPlayer') btnAudio!: ElementRef;

    audio: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();
        this.audio.src = 'assets/audio/song-skyrim.mp3';
        // this.audio.play();
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
