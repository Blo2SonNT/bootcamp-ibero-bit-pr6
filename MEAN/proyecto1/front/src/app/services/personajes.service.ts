import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../models/personajes';

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }


    getPersonajes():Observable<any>{
        return this.http.get(`${this.url}/obtener-personajes`)
    }

    getOnePersonaje():Observable<any>{
        return this.http.get(`$this.url}`)
    }

    postPersonaje(personaje: Personajes):Observable<any>{
        return this.http.post(`${this.url}/crear-personaje`, personaje)
    }

    putPersonaje():Observable<any>{
        return this.http.put(`$this.url}`, {})
    }

    deletePersonaje():Observable<any>{
        return this.http.delete(`$this.url}`)
    }


}
