const express = require('express')
const router = express.Router()
const empanadaController = require('../controllers/empanadaController')
const usuariosController = require('../controllers/usuariosController')


/*
| ------ | -------------------- |
|  GET   | Obtener varios o uno |
|  PUT   |      Actualizar      |
| DELETE |        Borrar        |
|  POST  |        Crear         |
| ------ | -------------------- |
*/

router.get('/empanadas', empanadaController.buscarEmpanadas)
router.get('/empanada', empanadaController.buscarUnaEmpanada)
router.put('/empanada', empanadaController.actualizarEmpanada)
router.delete('/empanada', empanadaController.eliminarEmpanada)
router.post('/empanada', empanadaController.crearEmpanada)

router.get('/usuarios', usuariosController.buscarUsuarios)
router.get('/usuario/:id', usuariosController.buscarUnUsuario)
router.get('/usuario2/:nombre', usuariosController.buscarUnUsuarioPorNombre)
router.put('/usuario/:id', usuariosController.actualizarUsuario)
router.delete('/usuario/:id', usuariosController.eliminarUsuario)
router.post('/usuario', usuariosController.crearUsuario)


module.exports = router
