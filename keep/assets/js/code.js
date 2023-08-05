/*

let nombre = 'Luis'

if (nombre == 'Pepe') {
    console.log('Eres pepe')
} else if (nombre == 'Miguel') {
    console.log('Eres miguel')
} else if (nombre == 'Tatiana') {
    console.log('Eres Tatiana')
} else if (nombre == 'Luis') {
    console.log('Eres Luis')
} else if (nombre == 'Kevin') {
    console.log('Eres Kevin')
} else {
    console.log('No te conozco')
}


switch (nombre) {
    case 'Pepe':
        console.log('PEEPEEEE')
        break
    case 'Fulano':
        console.log('FULANITOOOO 🙃')
        break
    default:
        console.log('FUERA DE AQUI')
}

*/


let dataUsuario = { correo: "miguel@admin.com", pass: 'admin123' }

let formularioIngreso = document.querySelector("#formLogin")
formularioIngreso.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    let correoInput = evento.target.correoUsuario.value
    if (correoInput != "" && evento.target.claveUsuario.value != "") {
        if (regexCorreo.test(correoInput)) {
            if (dataUsuario.correo == correoInput) {
                if (dataUsuario.pass == evento.target.claveUsuario.value) {
                    location.href = "bienvenida.html"
                    sessionStorage.setItem('login', 'si')
                } else {
                    alert("Su correo o contraseña no son validos")
                }
            } else {
                alert("Su correo o contraseña no son validos")
            }
        } else {
            alert("Su correo o contraseña no son validos")

        }
    }
})