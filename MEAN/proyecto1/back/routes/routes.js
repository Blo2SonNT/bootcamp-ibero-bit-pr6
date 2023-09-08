const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controller')

router.get('/obtener-personajes', personajesController.obtenerPersonajes)
router.post('/crear-personaje', personajesController.crearPersonaje)
router.put('/', personajesController.actualizarPersonaje)
router.delete('/', personajesController.eliminarPersonaje)


module.exports = router
