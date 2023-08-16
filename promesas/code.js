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



let urlApi = "https://rickandmortyapi.com/api/character"
fetch(urlApi)
    .then((res) => res.json())
    .then((data) => {
        let divGrilla = document.querySelector("#grillaRM")
        console.log(data)

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

    }).catch(error => {
        console.error("error al consumir la api")
    })