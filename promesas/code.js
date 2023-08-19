// let miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let numeroRandom = Math.random()
//         console.log('file: code.js:4 ->  numeroRandom:', numeroRandom)
//         if (numeroRandom > 0.5) {
//             resolve(numeroRandom)
//         } else {
//             reject(numeroRandom)
//         }
//     }, 1000);
// })

// miPromesa.then((resultadito) => {
//     console.log("%c La promesa se cumplio porque el numero es menor a 0.5, el numero fue " + resultadito, "color:green; font-size:2rem")
// }).catch((errorcito) => {
//     console.log("%c La promesa se incumplio porque el numero no es mayor que 0.5, el numero fue " + errorcito, "color:red; font-size:2rem")
// })



function consumoAPI(urlApi = "https://rickandmortyapi.com/api/character?page=1", tipo = 'normal') {

    if (tipo != 'normal') {
        let busquedaUsuario = document.querySelector('#busqueda').value
        urlApi = `${urlApi}&name=${busquedaUsuario}`
    }

    fetch(urlApi)
        .then((res) => res.json())
        .then((data) => {
            let divGrilla = document.querySelector("#grillaRM")
            divGrilla.className = "row row-cols-1 row-cols-md-4 g-4"
            console.log(data)
            divGrilla.innerHTML = ""
                // if ("error" in data == false) {
            if (!data.hasOwnProperty("error")) {
                data.results.forEach((personaje) => {
                    let estadoPersonaje = personaje.status
                    let claseEstado = ""
                    switch (estadoPersonaje) {
                        case 'Alive':
                            claseEstado = 'alive'
                            break;
                        case 'Dead':
                            claseEstado = 'dead'
                            break;
                        default:
                            claseEstado = 'unknown'
                            break;
                    }

                    divGrilla.innerHTML += `
                
                <div class="col">
                    <div class="card">
                        <img src="${personaje.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                            <ul class="list-group">
                                <li class="list-group-item">${personaje.species}</li>
                                <li class="list-group-item">
                                    <div class="estadoPersonaje ${claseEstado}"></div>
                                    ${personaje.status}</li>
                                <li class="list-group-item">${personaje.gender}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                });

                let atributoDisabledPrev = ""
                let visibilityPrev = ""
                let visibilityNext = ""
                let atributoDisabledNext = ""
                if (data.info.prev == null) {
                    atributoDisabledPrev = "disabled"
                    visibilityPrev = "invisible"
                }
                if (data.info.next == null) {
                    atributoDisabledNext = "disabled"
                    visibilityNext = "invisible"
                }

                document.querySelector("#paginacion").innerHTML = `
                <div class="my-5 pb-5 d-flex justify-content-between">
                    <button class="btn btn-dark ${visibilityPrev}" ${atributoDisabledPrev} onclick="consumoAPI('${data.info.prev}')">Anterior</button>
                    <button class="btn btn-dark ${visibilityNext}" ${atributoDisabledNext} onclick="consumoAPI('${data.info.next}')">Siguiente</button>
                </div>
            `
            } else {
                divGrilla.innerHTML = `
                    <h3 class="text-danger">No hay resultados</h3>
                    <img src="https://pa1.aminoapps.com/6375/c80fcfc9df554f63db6c1d459381cb24d94427a0_00.gif"> 
                    `
                document.querySelector("#paginacion").innerHTML = ""
                divGrilla.className = "text-center"
            }

        }).catch(error => {
            console.error("error al consumir la api")
            console.log(error)
        })
}

consumoAPI()

// function prueba(param1 = "pepe") {
//     console.log(param1)
// }

// prueba("fulano")