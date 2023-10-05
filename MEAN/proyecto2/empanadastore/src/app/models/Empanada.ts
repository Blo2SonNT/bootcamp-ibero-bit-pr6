export class Empanada{
    _id?: string
    nombre: string
    precio:number
    sabor:string
    tipo:string
    imagen:string

    constructor(nombre:string, precio:number, sabor:string, tipo:string, imagen:string){
        this.nombre = nombre
        this.precio = precio
        this.sabor = sabor
        this.tipo = tipo
        this.imagen = imagen
    }
}

