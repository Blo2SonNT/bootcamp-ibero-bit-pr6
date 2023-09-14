const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controller')

router.get('/obtener-personajes', personajesController.obtenerTodosLosPersonajes)
router.get('/buscar-personaje/:id', personajesController.obtenerUnSoloPersonaje)
router.post('/crear-personaje', personajesController.crearPersonaje)
router.put('/', personajesController.actualizarPersonaje)
router.delete('/eliminar-personaje/:id', personajesController.eliminarPersonaje)


module.exports = router
