import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hechizos } from "src/app/models/hechizo";

@Injectable({
    providedIn: 'root'
})
export class HechizosService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }


    getHechizos(): Observable<any> {
        return this.http.get(`${this.url}/obtener-hechizos`)
    }

    postHechizos(hechizo: Hechizos): Observable<any> {
        return this.http.post(`${this.url}/crear-hechizo`, hechizo)
    }
}
