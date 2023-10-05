require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')

exports.generarToken = async(req, res) => {
    const { correo, password } = req.body

    const usuario = await Usuario.findOne({ correo: correo })
    if (!usuario) {
        return res.status(401).json({ msg: "El correo es invalido" })
    }

    if (usuario.password !== password) {
        return res.status(401).json({ msg: "La contraseña es invalida" })
    }

    const payload = {
        id: usuario._id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1h' })
    return res.status(202).json({ token: token })
}
