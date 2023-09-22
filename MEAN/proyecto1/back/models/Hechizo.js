const mongoose = require('mongoose')

const HechizoSchema = mongoose.Schema({
    invocacion: {
        type: String,
        required: true
    },
    poder: {
        type: Number,
        required: true
    },
    mana: {
        type: Number,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('hechizo', HechizoSchema)