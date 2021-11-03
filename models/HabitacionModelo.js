const { model, Schema } = require('mongoose')

const HabitacionModelo = Schema({

    nombre: {
        type: String,
        require: true
    },

    foto: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioAdulto: {
        type: Number,
        required: true
    },

    precioNiño: {
        type: Number,
        required: true
    }

})

module.exports = model('Habitaciones', HabitacionModelo)