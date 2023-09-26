const mongoose = require('mongoose');

const EmpanadaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model('empanada', EmpanadaSchema)
