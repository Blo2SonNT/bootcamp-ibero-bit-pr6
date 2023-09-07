const express = require('express')
const conectarDB = require('./config/db')

const app = express()
conectarDB()


//rutas - endpoint


app.get('/api', (req, res) => {
    res.send('Visitando la api')
})
app.post('/api/llamado2', (req, res) => {
    res.send('llamando la api con POST 1')
})
app.post('/api', (req, res) => {
    res.send('llamando la api con POST 2')
})
app.put('/api', (req, res) => {
    res.send('llamando la api con PUT')
})
app.delete('/api', (req, res) => {
    res.send('llamando la api con DELETE')
})


app.listen(3000, () => {
    console.log("La aplicación se esta ejecutando en http://localhost:3000")
})
