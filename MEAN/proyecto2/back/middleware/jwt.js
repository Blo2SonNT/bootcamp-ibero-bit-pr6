const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.verificarToken = (req, res, next) => {

    console.log(req.headers.authorization)

    let token = req.headers.authorization

    if (!token) {
        return res.status(400).json({ msg: "Token no recibido" })
    }

    token = token.split(' ')

    jwt.verify(token[1], process.env.SECRET_KEY_JWT, (error, decoded) => {
        if (error) {
            return res.status(403).json({ msg: "Token invalido" })
        }

        req.userData = decoded
        next()
    })


}
