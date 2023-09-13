const fs = require('fs')

fs.readFile('./archivo.txt', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        let infodata = data.toString()

        fs.writeFile("./archivo.txt", `${infodata} \n otra cosa`, (error2) => {
            if (error2) {
                console.log(error2)
            } else {
                console.log('Archivo creado')
            }
        })
    }
})