const { Router } = require('express')
const rutas = Router();

const { crearReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { buscarReservas } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')

const { reservarHabitacion } = require('../controllers/controlador2.js')
const { buscarHabitacion } = require('../controllers/controlador2.js')
const { buscarHabitaciones } = require('../controllers/controlador2.js')
const { editarHabitacion } = require('../controllers/controlador2.js')
const { eliminarHabitacion } = require('../controllers/controlador2.js')


rutas.get('/hotel/v1/reservas', buscarReservas)
rutas.get('/hotel/v1/reservas/:id', buscarReserva)
rutas.post('/hotel/v1/reservas', crearReserva)
rutas.put('/hotel/v1/reservas/:id', editarReserva)
rutas.delete('/hotel/v1/reservas/:id', eliminarReserva)

rutas.get('/hotel/v2/habitaciones', buscarHabitaciones)
rutas.get('/hotel/v2/habitaciones/:id', buscarHabitacion)
rutas.post('/hotel/v2/habitaciones', reservarHabitacion)
rutas.put('/hotel/v2/habitaciones/:id', editarHabitacion)
rutas.delete('/hotel/v2/habitaciones/:id', eliminarHabitacion)


module.exports = rutas