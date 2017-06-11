const express = require('express')
const router = express.Router()

const getAllRecipes = require('./handlers/getAllRecipes')

router.get('/', getAllRecipes)

module.exports = router
