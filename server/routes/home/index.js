const express = require('express')
const router = express.Router()

const home = require('./handlers/home')

router.get('/', home)

module.exports = router
