const express = require('express')
const router = express.Router()

const uploadImage = require('./handlers/uploadImage')

router.post('/upload', uploadImage)

module.exports = router