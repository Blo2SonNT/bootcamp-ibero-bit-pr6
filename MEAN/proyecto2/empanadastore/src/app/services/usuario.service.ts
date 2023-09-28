import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
        return this.http.get(`${this.url}/usuarios`)
    }

    deleteUsuario(idUsuario: string): Observable<any>{
        return this.http.delete(`${this.url}/usuario/${idUsuario}`)
    }


}
