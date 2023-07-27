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