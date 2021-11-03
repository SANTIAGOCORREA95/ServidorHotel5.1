const { model, Schema } = require('mongoose')

const ReservaModelo = Schema({

    nombre:{
        type:String,
        require: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    fechaInicio: {
        type: Date,
        required: true
    },

    fechaFinal: {
        type: Date,
        required: true
    },
    
    numPersonas: {
        type: Number,
        required: true
    }

})

module.exports = model('Reservas', ReservaModelo)
