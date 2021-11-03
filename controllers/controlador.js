const { request, response } = require('express')

const { registrarReserva } = require('../services/servicioReservas.js')
const { leerReserva } = require('../services/servicioReservas.js')
const { leerReservas } = require('../services/servicioReservas.js')
const { borrarReserva } = require('../services/servicioReservas.js')
const { modificarReserva } = require('../services/servicioReservas.js')


async function crearReserva(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await registrarReserva(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito resgistrando una reserva"
        })

    } catch (error) {

        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos una problema: " + error
        })

    }

}

async function buscarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let reserva = await leerReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: reserva
        })

    } catch (error) {

        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos una problema: " + error
        })

    }

}

async function buscarReservas(peticion = request, respuesta = response) {

    try {

        let reservas = await leerReservas()

        respuesta.status(200).json({
            estado: true,
            mensaje: reservas
        })

    } catch (error) {

        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos una problema: " + error
        })

    }

}

async function editarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la reserva: " + id
        })

    } catch (error) {

        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos una problema: " + error
        })

    }

}

async function eliminarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito eliminando la reserva: " + id
        })

    } catch (error) {

        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos una problema: " + error
        })

    }

}

module.exports = {

    crearReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva,

}
