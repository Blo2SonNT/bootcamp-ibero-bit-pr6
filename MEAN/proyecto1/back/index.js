const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

const app = express()
conectarDB()
app.use(cors())
app.use(express.json())
    //rutas - endpoint

app.use('/api/v1', require('./routes/routes'))




app.listen(3000, () => {
    console.log("La aplicación se esta ejecutando en http://localhost:3000")
})
