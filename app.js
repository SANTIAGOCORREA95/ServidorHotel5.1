require('dotenv').config()

const ServidorModelo=require("./models/ServidorModelo.js")

const servidorFPC=new ServidorModelo()

servidorFPC.despertarServidor()