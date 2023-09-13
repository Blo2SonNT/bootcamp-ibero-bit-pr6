const Personaje = require('../models/Personajes')

exports.crearPersonaje = async(req, res) => {
    // console.log(req.body)
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
    try {
        const personajesData = await Personaje.find()
        res.json(personajesData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.obtenerUnSoloPersonaje = async(req, res) => {
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

exports.actualizarPersonaje = (req, res) => {
    res.send("actualizando personaje")
}

exports.eliminarPersonaje = (req, res) => {
    res.send("borrando personaje")
}
