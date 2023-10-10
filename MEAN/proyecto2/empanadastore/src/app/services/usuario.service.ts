import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url = 'http://localhost:4000/api/v1'

    constructor(private http:HttpClient) { }

    postUsuario(dataUsuario: Usuario): Observable<any> {
        return this.http.post(`${this.url}/usuario`, dataUsuario)
    }

    getUsuarios(): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('tokenIngresoPepeA')}`)
        return this.http.get(`${this.url}/usuarios`, { headers } )
    }

    deleteUsuario(idUsuario: string): Observable<any>{
        return this.http.delete(`${this.url}/usuario/${idUsuario}`)
    }

    getUsuario(idUsuario: string): Observable<any>{
        return this.http.get(`${this.url}/usuario/${idUsuario}`)
    }

    putUsuario(idUsuario: string | null, dataUsuario: Usuario): Observable<any>{
        return this.http.put(`${this.url}/usuario/${idUsuario}`, dataUsuario)
    }

    postIngresoCuenta(dataLogin: object): Observable<any>{
        return this.http.post(`${this.url}/ingreso`, dataLogin)
    }

    estaLogueado(){
        // if(sessionStorage.getItem('tokenIngresoPepeA') != null){
        //     return true
        // }else{
        //     return false
        // }
        return (sessionStorage.getItem('tokenIngresoPepeA') != null) ? true : false
    }

    postDesencriptarToken(token:string): Observable<any>{
        return this.http.post(`${this.url}/infotoken`, { tokenUser: token } )
    }

}
