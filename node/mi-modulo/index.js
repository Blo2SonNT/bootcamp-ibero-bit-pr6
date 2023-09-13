function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    if (a == 0 || b == 0) {
        return "Las divisiones entre 0 no son una opción"
    } else {
        return a / b
    }
}

function ejemploNoExportado() {
    return "Este mensaje no deberia salir del archivo index.js"
}


exports.sumar = sumar
exports.restar = restar
exports.multiplicar = multiplicar
exports.dividir = dividir