export class Personajes {
    _id?: string;
    nombre: string
    edad: number
    urlImagen: string


    constructor(nombre: string, edad: number, urlImagen: string) {
        this.nombre = nombre
        this.edad = edad
        this.urlImagen = urlImagen
    }
}

