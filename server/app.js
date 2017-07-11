const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const dbUrl = process.env.DB_URL
const PORT = process.env.PORT
const PATH = process.env.PATH

console.log( `This is the path of the .env archive: ${PATH}` )

const upload = multer({
	dest: PATH
})


mongoose.promise = Promise
mongoose.connect(dbUrl)

const app = express()

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


app.post('/upload', upload.single('file'), (req, res) => {
	res.send(JSON.stringify(req.file))
})

app.get('/', (eq, res) => {
  res.redirect('/home')
})
app.use('/home', routerHome)
app.use('/recipes', routerRecipes)
app.use('/api/recipe', routerApiRecipe)
app.use('/api/recipes', routerApiRecipes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
