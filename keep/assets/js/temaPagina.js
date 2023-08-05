// for (let iDom = 0; iDom < elementosDOM.length; iDom++) {

//     if (document.querySelector(elementosDOM[iDom]) != null) {
//         let elementoCaptura = document.querySelectorAll(elementosDOM[iDom])   
//         elementoCaptura.forEach((elementoTema) => {
//             elementoTema.classList.add('temaBlanco')
//         })
//     }

// }


const colorNegroCSS = getComputedStyle(document.documentElement).getPropertyValue('--color-negro');
const colorBlancoCSS = getComputedStyle(document.documentElement).getPropertyValue('--color-blanco');

let temaClaro = document.querySelector("#btnTemaClaro")
let temaOscuro = document.querySelector("#btnTemaOscuro")
let elementosDOM = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'section', 'p', 'span']
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
                })
            }
        });
    }
}


temaClaro.addEventListener("click", () => {

})

temaOscuro.addEventListener("click", () => {
    console.log("colocando tema oscuro")
})