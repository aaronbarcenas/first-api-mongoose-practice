
const express = require('express')
const mongoose = require('mongoose')
const server = express()
const Koder = require('./kodersModel')
server 

const DB_USER = 'aaron'
const DB_PASSWORD = 'hfo045no'
const DB_HOST = 'novena-gen.fllyd.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

server.get('/koders', async ( req, res ) =>{

  const allKoders = await Koder.find({})

  res.json({
    menssage: 'all koders',
    success: true,
    data: {
      koders: allKoders
    }
  })
})

server.get('/koders/male', async ( req, res ) =>{

  const maleKoders = await Koder.find({ gender: 'm'})

  res.json({
    menssage: 'male koders',
    success: true,
    data: {
      koders: maleKoders
    }
  })
})

server.get('/koders/femenin', async ( req, res ) => {
  const femeninKoders = await Koder.find({ gender: 'f'})

  res.json({
    message: 'femenin koders',
    success: true, 
    data: {
      koders: femeninKoders
    }
  })
})



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // aqui ya estamos conectados a la DB
    Koder.create({
      name: 'Aaron',
      lastName: 'Barcenas',
      age: 38,
      gender: 'm'
    })
      .then(( koderCreated ) => {
        console.log('koder creado :', koderCreated)
      })
      .catch(( error ) => {
        console.error('error: ', error)
      })
    server.listen(8080, () => {
      console.log('server is listening')
    })
  })
  .catch(() => {
    console.error('error: ', error)
  })
