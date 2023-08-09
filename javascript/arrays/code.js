//cSpell:disable

let numeros = [9, 5, 12, "pepe", "pepa", 305, 1, 4, 75, "fulano", 9, 3, -6]
console.log("array original ", numeros)

//agregr elementos al final del array
numeros.push(77)
console.log("push ", numeros)


//eleminar el ultimo elemento
numeros.pop()
console.log("pop ", numeros)

numeros.unshift(69)
console.log("unshift ", numeros)


//eleminar el primer elemento
numeros.shift()
console.log("shift", numeros)

// let pele = []
// numeros.forEach(num => {
//     pele.push(num)
// });

//ordenar elementos
// numeros.sort()
// console.log("sort ", numeros)

let arrayNuevo = numeros.slice()
numeros.sort()

console.log(numeros)
console.log("copia ", arrayNuevo)
    // typeof
let Ordennumeros = []
let ordenletras = []
numeros.forEach(num => {
    if (typeof(num) == "number") {
        Ordennumeros.push(num)
    } else {
        ordenletras.push(num)
    }
    Ordennumeros.sort((a, b) => {
        return (a - b)
    })
})
Ordennumeros.concat(ordenletras)
console.log(ordenletras.concat(Ordennumeros))


// regex
let Ordennumeros2 = []
let ordenletras2 = []
let regexNumeros = /^-?\d+(\.\d+)?$/
numeros.forEach(num => {
    if (regexNumeros.test(num)) {
        Ordennumeros2.push(num)
    } else {
        ordenletras2.push(num)
    }
    Ordennumeros2.sort((a, b) => {
        return (a - b)
    })
})
Ordennumeros2.concat(ordenletras2)
console.log(ordenletras2.concat(Ordennumeros2))



//splice - indexof


numeros.splice(numeros.indexOf("fulano"), 0, ["sutano", "mengano", "tatiana"])
console.log(numeros)

let indiceFulano = numeros.indexOf("fulano")
console.log('file: code.js:73 ->  indiceFulano:', indiceFulano)