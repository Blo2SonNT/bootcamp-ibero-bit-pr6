let btn = document.querySelector("#btnSuspenso")

btn.addEventListener("click", () => {
    const audio = new Audio("assets/suspenso.mp3");
    audio.play();
})


let btnHola = document.querySelector('#saludo')
btnHola.addEventListener("click", () => {
    // let ejemplo = new saludoUsuario("fulana", "")
    // console.log(ejemplo.definirGenero())
    // console.log(ejemplo.ciudad)


    let ejemplo2 = new DespedirUsuario("pepito", "");
    console.log(ejemplo2.definirGenero())
})


class saludoUsuario {

    ciudad = "Bogota"

    constructor(nombre, ciudad) {
        this.nombre = nombre
        if (ciudad != "") {
            this.ciudad = ciudad
        }
    }

    verNombre() {
        return this.nombre
    }


    definirGenero() {
        if (this.nombre == "fulana") {
            this.genero = "F"
        } else if (this.nombre == "pepito") {
            this.genero = "M"
        } else {
            this.genero = "Helicoptero"
        }
        return this.genero
    }
}

class DespedirUsuario extends saludoUsuario {


    constructor(nombre, ciudad, insulto) {
        super(nombre, ciudad)
        this.insulto = insulto
    }

    verNombre() {
        return `el nombre antiguo era ${super.verNombre()} ahora eres fulano`
    }

}


class ejemploPepe extends DespedirUsuario {
    constructor(nombre, ciudad) {
        super(nombre, ciudad)
    }
}

let pepe = new ejemploPepe("pepito", "")
pepe.verNombre()

//a^2 = b^2 + c^2

function triangulo(cateto1, cateto2) {
    console.log("pepe")

    function hipotenusa(C1, C2) {
        let cateto = Math.pow(C1, 2) + Math.pow(C2, 2)
        let h = Math.sqrt(cateto)
        return h
    }

    this.teorema = hipotenusa(cateto1, cateto2)
}

let x = new triangulo(3, 4)

console.log(x.teorema)



function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad

    var salario = 0

}

class PersonaClase {
    constructor(fechaViaje) {
        this.fecha = fechaViaje
    }
}



/************************************************************/


// Punto 3 : POO


class CuentaBancaria {

    constructor(saldo) {
        this.saldo = saldo
    }
}

let pepepe2 = new CuentaBancaria(20000)

console.log(pepepe2)

class xx {
    constructor(direccion, ejemplo) {

    }
}


let u = new xx(pepepe2)