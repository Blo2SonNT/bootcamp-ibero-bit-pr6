import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-barra-navegacion',
    templateUrl: './barra-navegacion.component.html',
    styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent{

    @ViewChild('btnCloseBarra') btnCloseBarra!: ElementRef

    constructor(public _usuarioService: UsuarioService,  private router: Router){}

    cerrarSesion(){
        sessionStorage.removeItem('tokenIngresoPepeA');
        sessionStorage.removeItem('infoUsuario');
        this.router.navigate(['/ingreso'])
        this.btnCloseBarra.nativeElement.click()
    }

}
