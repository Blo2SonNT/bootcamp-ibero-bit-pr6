/*
//Declarando variables a guardar en el localstorage
let estudiantes = [
    { nombre: "Susana", edad: 78 },
    { nombre: "Alejandra", edad: 12 },
]

let estudiantes2 = [
    { nombre: "Susana", edad: 78 },
    { nombre: "Alejandra", edad: 12 },
]

let ejemplo = { pepe: 2 }
//Guardando la información en el localstorage
//setItem: guarda o actualiza el LS o SS
//getItem: obtiene los valores de una llave del LS o SS
//removeItem: elimina una llave especifica del LS o SS
//clear: borra todo contenido del LS o SS
//JSON.stringify:me convierte el objeto o array a texto para guardarlo en el LS o SS
localStorage.setItem('estudiantes_ls', JSON.stringify(estudiantes))
localStorage.setItem('estudiantes_ls_2', estudiantes2)
localStorage.setItem('ejemplo', '[2]')

let consultaLS = localStorage.getItem('estudiantes_ls')
//JSON.parse: me trata el texto extraido del LS o SS como un objeto o array
consultaLS = JSON.parse(consultaLS)


localStorage.removeItem("ejemplo")


<input type="text" class="form-control" id="iNombre" onblur="guardarNombre()">
<select id="tipoDocumento" onchange="guardarDocumento()" class="form-control">
    <option value="x">Seleccione una...</option>
    <option value="Cedula">C.C</option>
    <option value="Cedula extranjeria">C.E</option>
    <option value="Tarjeta de identidad">T.I</option>
</select>

function guardarNombre() {
    let nombreUsuario = document.querySelector('#iNombre').value
    localStorage.setItem("nombre", nombreUsuario)
}

function guardarDocumento() {
    let documentoUsuario = document.querySelector('#tipoDocumento')
    localStorage.setItem('tipoDocumento', documentoUsuario.value)
    documentoUsuario.classList.add('border', 'border-success', 'border-3', 'pepe')
}

//Ejemplo de condicional ternario

let nombre = "miguel"
if (nombre == 'pepe') {
    console.log('eres pepe')
} else {
    console.error('no eres pepe')
}

(nombre == 'pepe') ? console.log('eres pepe') : console.error('no eres pepe')


function esParImpar() {
    let numeroUsuario = prompt("Cual es el numero a consultar?")
    if (numeroUsuario % 2 == 0) {
        alert('El numero es par')
    } else {
        alert('El numero es impar')
    }
}


function sumatoria() {
    let numeroUsuario = prompt('Cual es el numero')
    let sumaTotal = 0

    for (let x = 1; x <= numeroUsuario; x++) {
        sumaTotal = sumaTotal + x
        console.log(sumaTotal)
    }
}

*/



if (sessionStorage.getItem('login') == null) {
    location.href = 'index.html'
} else {

    let formularioNotas = document.querySelector("#formNota")
    formularioNotas.addEventListener('submit', (pepeEvento) => {
        pepeEvento.preventDefault();

        let errorFormulario = false;
        (!mostrarError('iTitulo', 'errorTitulo')) ? errorFormulario = true: '';
        (!mostrarError('txtNota', 'errorNota')) ? errorFormulario = true: '';

        if (!errorFormulario) {

            let contador = 0
            if (localStorage.getItem('contador') == null) {
                localStorage.setItem('contador', 0)
            } else {
                contador = localStorage.getItem('contador')
                contador = parseInt(contador)
                contador++
            }

            localStorage.setItem(`tituloNota${contador}`, pepeEvento.target.iTitulo.value)
            localStorage.setItem(`nota${contador}`, pepeEvento.target.txtNota.value)
            localStorage.setItem('contador', contador)
            pepeEvento.target.reset()
            Swal.fire({
                title: 'La notita fue guardada',
                icon: 'success',
                iconColor: '#2bff00',
                color: '#fff',
                background: '#111',
                backdrop: `
                    rgba(76, 196, 49, 0.56)
                    url("assets/img/pato.gif")
                    left top
                    no-repeat
                `,
                confirmButtonText: 'Vale! 😬',
                confirmButtonColor: '#1f911f',
            })
            listarNotas()
        }
    })







    listarNotas()




}


function mostrarError(idInput, idDiverror) {
    if (document.querySelector(`#${idInput}`).value == '') {
        let divError = document.querySelector(`#${idDiverror}`)
        divError.classList.remove('d-none')
        return false
    } else {
        return true
    }
}


function listarNotas() {
    if (parseInt(localStorage.getItem('contador')) >= 0) {

        let grillaNotas = document.querySelector("#notasUsuario")

        grillaNotas.innerHTML = ''
        let cantidadNotas = localStorage.getItem('contador')

        for (let xNota = 0; xNota <= cantidadNotas; xNota++) {
            grillaNotas.innerHTML += `
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${localStorage.getItem('tituloNota'+xNota)}</h5>
                            <p class="card-text">${localStorage.getItem('nota'+xNota)}</p>
                        </div>
                    </div>
                </div>
            `

        }

        //proceso si existen notas
        document.querySelector('#resumenNotas').innerHTML = `Tienes ${parseInt(localStorage.getItem('contador'))+1} notas almacenadas`
    } else {
        document.querySelector('#resumenNotas').innerHTML = "No tienes notas almacenadas"
    }
}


//Mixin example