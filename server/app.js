const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

const app = express()

// require('dotenv').config()

// const dbUrl = process.env.DB_URL

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const PORT = process.env.PORT
console.log(process.env)

// console.log(PORT)
// console.log(dbUrl)

// mongoose.promise = Promise
// mongoose.connect(dbUrl)

app.use(express.static('client/public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
