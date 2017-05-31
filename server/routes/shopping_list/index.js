const express = require('express')
const router = express.Router()

const getShoppingList = require('./handlers/getShoppingList')

router.get('/', getShoppingList)

module.exports = router
