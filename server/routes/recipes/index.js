const express = require('express')
const router = express.Router()

const getAllRecipes = require('./handlers/getAll')
const addRecipe = require('./handlers/addRecipe')

router.get('/', getAllRecipes)
router.post('/', addRecipe)

module.exports = router
