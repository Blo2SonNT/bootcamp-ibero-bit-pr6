export class Usuario{
    _id?: string
    nombre: string
    apellido: string
    correo: string
    password: string
    direccion: string
    ciudad: string

    constructor(nombre:string, apellido:string, correo:string, password:string, direccion:string, ciudad:string ){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.password = password
        this.direccion = direccion
        this.ciudad = ciudad
    }
}

