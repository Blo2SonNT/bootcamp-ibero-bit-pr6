const Usuario = require('../models/Usuarios');


exports.crearUsuario = async(req, res) => {
    try {
        let usuario = new Usuario(req.body)
        await usuario.save()
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.buscarUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.buscarUnUsuario = async(req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}

exports.buscarUnUsuarioPorNombre = async(req, res) => {
    try {
        const usuario = await Usuario.find({ nombre: req.params.nombre })
        if (!usuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}

exports.actualizarUsuario = async(req, res) => {
    try {

        const { nombre, apellido, correo, password, direccion, ciudad } = req.body
        let dataUsuario = await Usuario.findById(req.params.id)
        if (!dataUsuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }

        dataUsuario.nombre = nombre
        dataUsuario.apellido = apellido
        dataUsuario.correo = correo
        dataUsuario.password = password
        dataUsuario.direccion = direccion
        dataUsuario.ciudad = ciudad

        dataUsuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, dataUsuario)
        res.json(dataUsuario)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}
exports.eliminarUsuario = async(req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: 'El usuario fue eliminado' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}