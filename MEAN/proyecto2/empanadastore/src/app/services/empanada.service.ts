import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empanada } from "../models/Empanada";

@Injectable({
    providedIn: 'root'
})
export class EmpanadaService {

    url = 'http://localhost:4000/api/v1'

    constructor(private http: HttpClient) { }

    postEmpanada(dataEmpanada: Empanada): Observable<any> {
        return this.http.post(`${this.url}/empanada`, dataEmpanada)
    }

    getEmpanadas(): Observable<any> {
        return this.http.get(`${this.url}/empanadas`)
    }

    getEmpanadasXlimite(limite:number = 4): Observable<any> {
        return this.http.get(`${this.url}/empanadas-inicio/${limite}`)
    }

    deleteEmpanada(idEmpanada: string): Observable<any> {
        return this.http.delete(`${this.url}/empanada/${idEmpanada}`)
    }

    getEmpanada(idEmpanada: string): Observable<any> {
        return this.http.get(`${this.url}/empanada/${idEmpanada}`)
    }

    putEmpanada(idEmpanada: string | null, dataEmpanada: Empanada): Observable<any> {
        return this.http.put(`${this.url}/empanada/${idEmpanada}`, dataEmpanada)
    }
}
