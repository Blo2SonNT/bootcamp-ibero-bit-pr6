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
*/



if (sessionStorage.getItem('login') == null) {
    location.href = 'index.html'
} else {

    let formularioNotas = document.querySelector("#formNota")
    formularioNotas.addEventListener('submit', (pepeEvento) => {
        pepeEvento.preventDefault();

        mostrarError('iTitulo', 'errorTitulo')
        mostrarError('txtNota', 'errorNota')

        console.log(pepeEvento)
        localStorage.setItem('tituloNota', pepeEvento.target.iTitulo.value)
        localStorage.setItem('nota', pepeEvento.target.txtNota.value)
    })


    if (localStorage.getItem('contador') == null) {
        localStorage.setItem('contador', 0)
    }






    if (parseInt(localStorage.getItem('contador')) > 0) {
        //proceso si existen notas
    } else {
        document.querySelector('#resumenNotas').innerHTML = "No tienes notas almacenadas"
    }


}


function mostrarError(idInput, idDiverror) {
    if (document.querySelector(`#${idInput}`).value == '') {
        let divError = document.querySelector(`#${idDiverror}`)
        divError.classList.remove('d-none')
        return
    }
}