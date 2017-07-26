const express = require('express')
const router = express.Router()
const multer = require('multer')

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const PATH = process.env.ROUTEUPLOADS
const upload = multer({
  dest: PATH
})

router.post('/', upload.single('file'), (req, res) => {
  res.send(JSON.stringify(req.file))
})

module.exports = router
