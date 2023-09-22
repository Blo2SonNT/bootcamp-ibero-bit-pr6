const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controller')
const hechizoController = require('../controllers/hechizo.controller')

router.get('/obtener-personajes', personajesController.obtenerTodosLosPersonajes)
router.get('/buscar-personaje/:id', personajesController.obtenerUnSoloPersonaje)
router.post('/crear-personaje', personajesController.crearPersonaje)
router.put('/actualizar-personaje/:id', personajesController.actualizarPersonaje)
router.delete('/eliminar-personaje/:id', personajesController.eliminarPersonaje)


router.get('/obtener-hechizos', hechizoController.obtenerTodosLosHechizos)
router.get('/buscar-hechizo/:id', hechizoController.obtenerUnSoloHechizo)
router.post('/crear-hechizo', hechizoController.crearHechizo)
router.put('/actualizar-hechizo/:id', hechizoController.actualizarHechizo)
router.delete('/eliminar-hechizo/:id', hechizoController.eliminarHechizo)

module.exports = router