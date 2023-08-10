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

        arrNotasUsuario.forEach(notaLS => {
            console.log('file: bienvenido.js:81 ->  notaLS:', notaLS)
            grillaNotas.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${notaLS.titulo}</h5>
                        <p class="card-text">${notaLS.nota}</p>
                    </div>
                </div>
            </div>
        `
        });


        //proceso si existen notas
        document.querySelector('#resumenNotas').innerHTML = `Tienes ${parseInt(localStorage.getItem('contador'))+1} notas almacenadas`
    } else {
        document.querySelector('#resumenNotas').innerHTML = "No tienes notas almacenadas"
    }
}


//Mixin example