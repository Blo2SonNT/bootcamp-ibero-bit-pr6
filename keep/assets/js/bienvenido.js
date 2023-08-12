//cSpell:disable
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


            let arrNotas = []
            if (localStorage.getItem('notas') != null) {
                arrNotas = localStorage.getItem('notas')
                arrNotas = JSON.parse(arrNotas)
            }

            arrNotas.push({ id: contador, titulo: pepeEvento.target.iTitulo.value, nota: pepeEvento.target.txtNota.value })

            localStorage.setItem('notas', JSON.stringify(arrNotas))
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
        let arrNotasUsuario = JSON.parse(localStorage.getItem("notas"))

        arrNotasUsuario.forEach((notaLS, posicionNota) => {
            grillaNotas.innerHTML += `
            
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${notaLS.titulo}</h5>
                            <label class="containerChk">
                                <input type="checkbox" id="nota_${notaLS.id}">
                                <div class="checkmark"></div>
                            </label>
                        </div>
                        <p class="card-text">${notaLS.nota}</p>
                        <div class="d-flex justify-content-end">
                            <button class="btn botonEditar" title="editar" data-id-nota="${notaLS.id}">
                                <i class="fa-solid fa-pencil text-dark" data-id-nota="${notaLS.id}"></i>
                            </button>
                            <button class="btn botonEliminar" title="eliminar" data-posicion="${posicionNota}">
                                <i class="fa-solid fa-trash text-danger"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
        });


        let chkNotas = document.querySelectorAll("input[type=checkbox]")
        let btnEliminarNotas = document.querySelector("#btnEliminarNotasMultiples")
        chkNotas.forEach(checkboxNota => {
            checkboxNota.addEventListener("change", (e) => {
                if (e.target.checked) {
                    btnEliminarNotas.removeAttribute("disabled")
                    btnEliminarNotas.classList.remove("invisible")
                } else {
                    let validacionCheckbox = document.querySelectorAll("input[type=checkbox]:checked")
                    if (validacionCheckbox.length == 0) {
                        btnEliminarNotas.setAttribute("disabled", "")
                        btnEliminarNotas.classList.add("invisible")
                    }
                }
            })
        });


        //proceso si existen notas
        document.querySelector('#resumenNotas').innerHTML = `Tienes ${arrNotasUsuario.length} notas almacenadas`

        let notasGrilla = document.querySelectorAll(".botonEliminar")
        notasGrilla.forEach(boton => {
            boton.addEventListener('click', (evento) => {
                Swal.fire({
                    title: '¿Seguro que desea eliminar la nota?',
                    text: "Esta accion no sera reversible, no sea peye! .|.",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar'
                }).then((result) => {
                    if (result.isConfirmed) {

                        let arrNotas = JSON.parse(localStorage.getItem('notas'))
                        let posicionNota = evento.target.dataset.posicion

                        arrNotas.splice(posicionNota, 1)

                        localStorage.setItem('notas', JSON.stringify(arrNotas))
                        listarNotas()
                        Swal.fire({
                            title: "Nota eliminada",
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Aceptar'
                        })
                    }
                })
            })
        });

        let btnGrillaNotas = document.querySelectorAll(".botonEditar")
        btnGrillaNotas.forEach(botonEditar => {
            botonEditar.addEventListener("click", (evento) => {
                document.querySelector("#botonCrearNota").click()
                document.querySelector("#modalNotasLabel").innerText = "Editar nota"
                let notasUsuario = JSON.parse(localStorage.getItem("notas"))
                let idNotaBusqueda = evento.target.dataset.idNota
                let notaAEditar = notasUsuario.filter(notaEditar => notaEditar.id == idNotaBusqueda)
                let posicionNotaArray = notasUsuario.findIndex(posNota => posNota.id == idNotaBusqueda)
                let formularioModal = document.querySelector("#formNota")

                formularioModal.iTitulo.value = notaAEditar[0].titulo
                formularioModal.txtNota.value = notaAEditar[0].nota

                document.querySelector("#btnGuardarNota").classList.add("d-none")
                let botonEditar = document.createElement("button")
                botonEditar.classList.add("btn", "botonPepe")
                botonEditar.innerText = "Actualizar nota"
                botonEditar.type = "button"
                botonEditar.id = "btnEditarNota"
                botonEditar.setAttribute("style", "color: yellow")
                botonEditar.setAttribute("onclick", `guardarEdicion(${posicionNotaArray})`)
                formularioModal.appendChild(botonEditar)
            })
        });


    } else {
        document.querySelector('#resumenNotas').innerHTML = "No tienes notas almacenadas"
    }
}


let botonNotasChkMultiple = document.querySelector("#btnEliminarNotasMultiples")
botonNotasChkMultiple.addEventListener("click", () => {
    let notasSeleccionadas = document.querySelectorAll("input[type=checkbox]:checked")

    Swal.fire({
        title: '¿Seguro que desea eliminar las notas seleccionadas?',
        text: "Esta accion no sera reversible, no sea peye! .|.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            notasSeleccionadas.forEach(elementoNota => {
                let notasUsuario = JSON.parse(localStorage.getItem("notas"))
                let id_nota = elementoNota.id
                id_nota = id_nota.split('_')
                id_nota = id_nota[1]
                let poscionNotaArray = notasUsuario.findIndex(notaCoincidencia => notaCoincidencia.id == id_nota)
                notasUsuario.splice(poscionNotaArray, 1)
                localStorage.setItem('notas', JSON.stringify(notasUsuario))
                botonNotasChkMultiple.setAttribute("disabled", "")
                botonNotasChkMultiple.classList.add("invisible")
                listarNotas()
            });
        }
    })
})



function guardarEdicion(posicionNota) {
    let formularioModal = document.querySelector("#formNota")
    let notasUsuario = JSON.parse(localStorage.getItem('notas'))
    let infoNota = notasUsuario[posicionNota]
    infoNota.titulo = formularioModal.iTitulo.value
    infoNota.nota = formularioModal.txtNota.value
    notasUsuario[posicionNota] = infoNota
    localStorage.setItem('notas', JSON.stringify(notasUsuario))
    listarNotas()
    document.querySelector("#btnCerrarModal").click()
    document.querySelector("#btnEditarNota").remove()
    document.querySelector("#btnGuardarNota").classList.remove("d-none")
    document.querySelector("#modalNotasLabel").innerText = "Crear nueva nota"
    formularioModal.reset()
}