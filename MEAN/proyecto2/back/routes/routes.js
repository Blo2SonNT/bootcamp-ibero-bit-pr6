const express = require('express')
const router = express.Router()
const empanadaController = require('../controllers/empanadaController')
const usuariosController = require('../controllers/usuariosController')
const sessionController = require('../controllers/sesionController')
const mdJWT = require('../middleware/jwt')

/*
| ------ | -------------------- |
|  GET   | Obtener varios o uno |
|  PUT   |      Actualizar      |
| DELETE |        Borrar        |
|  POST  |        Crear         |
| ------ | -------------------- |
*/

router.get('/empanadas', empanadaController.buscarEmpanadas)
router.get('/empanada/:id', empanadaController.buscarUnaEmpanada)
router.put('/empanada/:id', empanadaController.actualizarEmpanada)
router.delete('/empanada/:id', empanadaController.eliminarEmpanada)
router.post('/empanada', empanadaController.crearEmpanada)
router.get('/empanadas-inicio/:limite', empanadaController.buscarEmpanadasPorLimite)

router.get('/usuarios', mdJWT.verificarToken, usuariosController.buscarUsuarios)
router.get('/usuario/:id', mdJWT.verificarToken, usuariosController.buscarUnUsuario)
router.get('/usuario2/:nombre', usuariosController.buscarUnUsuarioPorNombre)
router.put('/usuario/:id', usuariosController.actualizarUsuario)
router.delete('/usuario/:id', usuariosController.eliminarUsuario)
router.post('/usuario', usuariosController.crearUsuario)

router.post('/ingreso', sessionController.generarToken)
router.post('/infotoken', sessionController.desencriptarToken)

module.exports = router


/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTRkZDMzZjVkN2UyNWVkM2VjMjUyZSIsIm5vbWJyZSI6Ik1pZ3VlbCIsImFwZWxsaWRvIjoiTmlldG8iLCJpYXQiOjE2OTY0NzI2NTYsImV4cCI6MTY5NjQ3NjI1Nn0.ygmQU7aMZXnT7AikD3s_RUvNCkimvWOMh0diG9wIECU
*/