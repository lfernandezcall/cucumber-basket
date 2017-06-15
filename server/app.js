const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const dbUrl = process.env.DB_URL
const PORT = process.env.PORT

mongoose.promise = Promise
mongoose.connect(dbUrl)

app.use(express.static('client/public'))
app.use(express.static('server/data'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const routerHome = require('./routes/home')
const routerRecipes = require('./routes/recipes')
const routerApiRecipe = require('./routes/api/recipe')
const routerApiRecipes = require('./routes/api/recipes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (eq, res) => {
  res.redirect('/home')
})

app.use('/home', routerHome)
app.use('/recipes', routerRecipes)
app.use('/api/recipe', routerApiRecipe)
app.use('/api/recipes', routerApiRecipes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
