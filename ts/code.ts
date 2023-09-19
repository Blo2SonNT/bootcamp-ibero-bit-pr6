//cSpell:disable

console.log("Hola mundo con TS")

let nombre: string = "Miguel"
let numero: number = 90
let booleano: boolean = true
let todo: any

let miArray: any[] = ["hola", 28, true]
let miArrayDeTextos: string[] = ["texto", "texto2", "texto3"]
let miArrayDeNumeros: number[] = [2, 5, 7, 0, 3]
let miArrayDeBoleanos: boolean[] = [true, true, false, true]
let arrayValoresDefinidos: [string, boolean, string, number] = ["texto", true, "texto2", 12]
let arrayDefinidoDeArray: [string, boolean, string, number][] = [["texto", true, "texto2", 12], ["texto", true, "texto2", 12]]

//datos vacíos
// let vacioExistencial: void
// let nulo: null = null
// let indefinido: undefined = undefined

// console.log(typeof(vacioExistencial))


function miFuncion(nombre: string, edad: number): any {
    if (nombre == "Alejandra" && edad == 12) {
        return true
    } else {
        return false
    }
}


console.log(miFuncion("Tatiana", 105))

interface HarryPotter {
    hechizo: string,
    varita: any[]
}

function hogwarts(infoHechizo: HarryPotter): any {
    console.log(infoHechizo)
}

hogwarts({ hechizo: "Flipendo", varita: ["madera de roble", "12 cm", "Ollivanders"] })

let embrujo: HarryPotter = { hechizo: "Leviossssaaaa", varita: ["madera de roble", "35 cm", "Ollivander"] }

class Usuario {
    public nombre: string
    protected correo: string
    private numero_documento: string
    public hechizoEsoterico: HarryPotter

    constructor(nombre: string, correo: string, numero_documento: string, hechizoEsoterico: HarryPotter) {
        this.nombre = nombre
        this.correo = correo
        this.numero_documento = numero_documento
        this.hechizoEsoterico = hechizoEsoterico
    }

    verNumeroDoc(){
        return this.numero_documento
    }

}

let objUsuario = new Usuario("Julian", "julian123@correo.com", "1234567654", embrujo)
console.log(objUsuario.verNumeroDoc())

class Entregas extends Usuario{
    curso: string
    equipo: boolean

    constructor(nombre: string, correo: string, numero_documento: string, hechizoEsoterico: HarryPotter, curso: string, equipo: boolean){
        super(nombre, correo, numero_documento, hechizoEsoterico)
        this.curso = curso
        this.equipo = equipo
    }

    

}