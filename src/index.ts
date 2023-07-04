import express from 'express' // ESModules
// const express = require("express"); -> commonjs
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // ? Middleware que transforma la req.body a un json

const PORT = 3000
//* En typescript puedes colocar un "_" para indicar no estas usando una variable evitar warnnings, tambien puedes indicarlo con un "_req"
app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
