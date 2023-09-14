const Personaje = require('../models/Personajes')

exports.crearPersonaje = async(req, res) => {
    console.log(req.ip)
    try {
        let personajeModel
        personajeModel = new Personaje(req.body)
        await personajeModel.save()
        res.send(personajeModel)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.obtenerTodosLosPersonajes = async(req, res) => {
    console.log(req.ip)

    try {
        const personajesData = await Personaje.find()
        res.json(personajesData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.obtenerUnSoloPersonaje = async(req, res) => {
    console.log(req.ip)

    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id)
            if (!personajeData) {
                res.status(404).send('Personaje no encontrado')
            } else {
                res.json(personajeData)
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.actualizarPersonaje = async(req, res) => {
    try {
        /*
        
        {
            "nombre": "Prueba",
            "edad": 45,
            "urlImagen":"prueba.jpg"
        }

        
        */



        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id)
            if (!personajeData) {
                res.status(404).send('Personaje no encontrado')
            } else {
                const { nombre, edad, urlImagen } = req.body

                personajeData.nombre = nombre
                personajeData.edad = edad
                personajeData.urlImagen = urlImagen

                let documentoActualizado = await Personaje.findOneAndUpdate({ _id: req.params.id }, personajeData, { new: true })
                res.json(documentoActualizado)

            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.eliminarPersonaje = async(req, res) => {
    console.log(req)
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id)
            if (!personajeData) {
                res.status(404).send('El id proporcionado no se encuentra')
            } else {
                await Personaje.findOneAndRemove({ _id: req.params.id })
                res.send("Personaje eliminado")
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}
