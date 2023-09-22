const Hechizo = require('../models/Hechizo')

exports.crearHechizo = async(req, res) => {
    try {
        let hechizoModel
        hechizoModel = new Hechizo(req.body)
        await hechizoModel.save()
        res.send(hechizoModel)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.obtenerTodosLosHechizos = async(req, res) => {
    console.log(req.ip)

    try {
        const hechizosData = await Hechizo.find()
        res.json(hechizosData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.obtenerUnSoloHechizo = async(req, res) => {
    console.log(req.ip)

    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const hechizoData = await Hechizo.findById(req.params.id)
            if (!hechizoData) {
                res.status(404).send('hechizo no encontrado')
            } else {
                res.json(hechizoData)
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}

exports.actualizarHechizo = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const hechizoData = await Hechizo.findById(req.params.id)
            if (!hechizoData) {
                res.status(404).send('hechizo no encontrado')
            } else {
                const { invocacion, poder, mana } = req.body

                hechizoData.invocacion = invocacion
                hechizoData.poder = poder
                hechizoData.mana = mana

                let documentoActualizado = await Hechizo.findOneAndUpdate({ _id: req.params.id }, hechizoData, { new: true })
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

exports.eliminarHechizo = async(req, res) => {
    console.log(req)
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const hechizoData = await Hechizo.findById(req.params.id)
            if (!hechizoData) {
                res.status(404).send('El id proporcionado no se encuentra')
            } else {
                await Hechizo.findOneAndRemove({ _id: req.params.id })
                res.send("hechizo eliminado")
            }
        } else {
            res.status(418).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador')
    }
}