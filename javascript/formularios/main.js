let formulario = document.querySelector("#formLogin")
let btnLogin = document.querySelector("#btnIngreso")

btnLogin.addEventListener("click", (e) => {
    alert("Me oprimieron, maldito patriarcado")
    console.log(e.target)
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
        // alert("Enviadno informacion")
    console.log(e.target)
    if (e.target.iCorreo.value == '') {
        alert("Burro bestia animal salvaje, ingrese su p*** correo")
        e.target.iCorreo.classList.add('border', 'border-danger')
    } else {
        // alert("🤞🤞🤞🤞")
        e.target.iCorreo.classList.remove('border-danger')
        e.target.iCorreo.classList.add('border-success')
        e.target.iPassword.focus()
    }
})


function saludame() {
    alert("👋👋👋")
}


function cambiarColor(colorDeseado) {
    document.querySelector("body").style.backgroundColor = colorDeseado
}