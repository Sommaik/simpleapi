const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  res.end('Hello World')
})

router.get('/user/:userId', (req, res) => {
  console.log(' userId = ' + req.params.userId)
  res.end('get success')
})

module.exports = router
