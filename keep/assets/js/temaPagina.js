// for (let iDom = 0; iDom < elementosDOM.length; iDom++) {

//     if (document.querySelector(elementosDOM[iDom]) != null) {
//         let elementoCaptura = document.querySelectorAll(elementosDOM[iDom])   
//         elementoCaptura.forEach((elementoTema) => {
//             elementoTema.classList.add('temaBlanco')
//         })
//     }

// }
//cSpell:disable

const colorNegroCSS = getComputedStyle(document.documentElement).getPropertyValue('--color-negro');
const colorBlancoCSS = getComputedStyle(document.documentElement).getPropertyValue('--color-blanco');
let temaClaro = document.querySelector("#btnTemaClaro")
let temaOscuro = document.querySelector("#btnTemaOscuro")

function cambiotemausuario() {

    let elementosDOM = ['.cambioTemaUsuarioOpcion']
    let temaActual = ''

    if (localStorage.getItem('tema') == null) {
        localStorage.setItem('tema', colorNegroCSS)
        temaActual = colorNegroCSS
        temaClaro.classList.remove('d-none')
    } else {
        temaActual = localStorage.getItem('tema')
        if (temaActual == colorNegroCSS) {
            temaClaro.classList.remove('d-none')
            temaOscuro.classList.add('d-none')
            document.querySelector('body').style.background = colorNegroCSS


            elementosDOM.forEach(iDom => {
                if (document.querySelector(iDom) != null) {
                    let elementoCaptura = document.querySelectorAll(iDom)
                    elementoCaptura.forEach(elementoTema => {
                        elementoTema.classList.add('temaBlanco')
                        elementoTema.classList.remove('temaNegro')
                        elementoTema.classList.add('bg-dark')
                    })
                }
            });
        } else if (temaActual == colorBlancoCSS) {
            temaOscuro.classList.remove('d-none')
            temaClaro.classList.add('d-none')
            document.querySelector('body').style.background = colorBlancoCSS
            elementosDOM.forEach(iDom => {
                if (document.querySelector(iDom) != null) {
                    let elementoCaptura = document.querySelectorAll(iDom)
                    elementoCaptura.forEach(elementoTema => {
                        elementoTema.classList.add('temaNegro')
                        elementoTema.classList.remove('temaBlanco')
                        elementoTema.classList.remove('bg-dark')
                    })
                }
            });
        }
    }
}

cambiotemausuario()


temaClaro.addEventListener("click", () => {
    localStorage.setItem('tema', colorBlancoCSS)
    cambiotemausuario()
})

temaOscuro.addEventListener("click", () => {
    localStorage.setItem('tema', colorNegroCSS)
    cambiotemausuario()
})