const express = require('express')
const router = express.Router()

const getAllRecipes = require('./handlers/getAllRecipes')
const addRecipe = require('./handlers/addRecipe')
const removeRecipeById = require('./handlers/removeRecipeById')

router.get('/', getAllRecipes)
router.post('/', addRecipe)
router.delete('/:id', removeRecipeById)

module.exports = router
