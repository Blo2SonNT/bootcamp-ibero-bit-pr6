const Empanada = require('../models/Empanada');

exports.crearEmpanada = async(req, res) => {
    try {
        let empanada = new Empanada(req.body)
        await empanada.save()
        res.json(empanada)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.buscarEmpanadas = async(req, res) => {
    try {
        const empanadas = await Empanada.find()
        res.json(empanadas)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}

exports.buscarEmpanadasPorLimite = async(req, res) => {
    try {
        const empanadas = await Empanada.find().limit(req.params.limite)
        res.json(empanadas)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}

exports.buscarUnaEmpanada = async(req, res) => {
    try {
        const empanada = await Empanada.findById(req.params.id)
        if (!empanada) {
            res.status(404).json({ mensaje: 'La empanada no existe' })
            return
        }
        res.json(empanada)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.actualizarEmpanada = async(req, res) => {
    try {

        const { nombre, precio, sabor, tipo, imagen } = req.body


        let dataEmpanada = await Empanada.findById(req.params.id)
        if (!dataEmpanada) {
            res.status(404).json({ mensaje: 'La empanada no existe' })
            return
        }


        dataEmpanada.nombre = nombre
        dataEmpanada.precio = precio
        dataEmpanada.sabor = sabor
        dataEmpanada.tipo = tipo
        dataEmpanada.imagen = imagen

        dataEmpanada = await Empanada.findOneAndUpdate({ _id: req.params.id }, dataEmpanada)
        res.json(dataEmpanada)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.eliminarEmpanada = async(req, res) => {
    try {
        const empanada = await Empanada.findById(req.params.id)
        if (!empanada) {
            res.status(404).json({ mensaje: 'La empanada no existe' })
            return
        }
        await Empanada.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: 'La empanada fue eliminado' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
