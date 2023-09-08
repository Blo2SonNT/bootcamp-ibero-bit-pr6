const express = require('express')
const conectarDB = require('./config/db')

const app = express()
conectarDB()

app.use(express.json())
    //rutas - endpoint

app.use('/api/v1', require('./routes/routes'))




app.listen(3000, () => {
    console.log("La aplicación se esta ejecutando en http://localhost:3000")
})
