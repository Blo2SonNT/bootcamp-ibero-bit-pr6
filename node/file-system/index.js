const fs = require('fs')

fs.writeFile("./archivo.txt", 'hola mundo desde node usando FS', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Archivo creado')
    }
})