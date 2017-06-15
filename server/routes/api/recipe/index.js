const express = require('express')
const router = express.Router()

const getRecipeById = require('./handlers/getRecipeById')

router.get('/:id', getRecipeById)

module.exports = router
