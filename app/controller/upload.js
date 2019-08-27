const multer = require('multer')
const express = require('express')
const router = express.Router()
const upload = multer({
  dest: '/Users/sommaik/Downloads/simpleapi'
})

router.post(
  '/image',
  upload.single('image', (req, res) => {
    res.end('upload complete')
  })
)

module.exports = router
