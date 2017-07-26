const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const dbUrl = process.env.DB_URL
const PORT = process.env.PORT

mongoose.promise = Promise
mongoose.connect(dbUrl)

const app = express()

app.use(express.static('client/public'))
app.use(express.static('server/data'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const routerUpload = require('./routes/upload')
const routerHome = require('./routes/home')
const routerRecipes = require('./routes/recipes')
const routerApiRecipe = require('./routes/api/recipe')
const routerApiRecipes = require('./routes/api/recipes')

app.use('/upload', routerUpload)
app.use('/', routerHome)
app.use('/home', routerHome)
app.use('/recipes', routerRecipes)
app.use('/api/recipe', routerApiRecipe)
app.use('/api/recipes', routerApiRecipes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
