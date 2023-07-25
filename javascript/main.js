// let nombreUsuario = prompt("Cual es tu nombre")

// let titulo1 = document.querySelector("#titulo1")
// let titulo2 = document.querySelector("#titulo2")
// let titulo3 = document.querySelector("#titulo3")

// titulo1.innerHTML = "Gracias " + nombreUsuario + " 🤪 "
// titulo2.innerHTML = 'Gracias ' + nombreUsuario + ' 🤪'
// titulo3.innerHTML = `<div> 
//     Gracias ${nombreUsuario} 🤪 
//     </div>
//     `

let productos = [
        { nombre: "pan", urlImg: "https://via.placeholder.com/200x200", precio: 2000, promocion: false },
        { nombre: "chocorramo", urlImg: "https://via.placeholder.com/200x200", precio: 2500, promocion: true, descuento: 20 },
        { nombre: "pizza", urlImg: "https://via.placeholder.com/200x200", precio: 35000, promocion: false },
        { nombre: "perro", urlImg: "https://via.placeholder.com/200x200", precio: 3000, promocion: false },
    ]
    //cSpell:disable
let divGrillaProductos = document.querySelector("#grilla")
let letraRoja = ''
for (let x = 0; x < productos.length; x++) {

    if (productos[x].promocion == true) {
        let descuentoPrecio = (productos[x].precio / 100) * productos[x].descuento
        productos[x].precio = productos[x].precio - descuentoPrecio
            //(porcentaje/100) * número = resultado
        console.log(descuentoPrecio)
        letraRoja = `texto-rojo-pepe`
    }
    divGrillaProductos.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${productos[x].urlImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${productos[x].nombre}</h5>
                    <p class="card-text ${letraRoja}">${productos[x].precio}</p>
                </div>
            </div>
        </div>
    `
    letraRoja = ''


}

// let edad = 0
// while (edad <= 18) {
//     edad++
// }


// let edad3 = 0
// do {
//     edad3++
// } while (edad3 <= 18);


// console.log('file: main.js:2 ->  titulo1:', titulo1)