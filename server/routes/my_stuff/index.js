const express = require('express')
const router = express.Router()

const myStuff = require('./handlers/my_stuff')

router.get('/', myStuff)

module.exports = router
