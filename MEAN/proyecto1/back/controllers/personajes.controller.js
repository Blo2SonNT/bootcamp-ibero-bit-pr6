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

exports.obtenerPersonajes = async(req, res) => {
    try {
        const personajesData = await Personaje.find()
        res.json(personajesData)
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
