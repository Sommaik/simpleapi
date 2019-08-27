const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const config = require('config')
const transport = nodemailer.createTransport(config.get('smtp'))

router.post('/send', (req, res) => {
  const mail = {
    to: 'sommai.k@gmail.com',
    subject: 'Test send email',
    html: '<h1>Hello</h1> from <b> node.js </b>'
  }
  transport.sendMail(mail, (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

module.exports = router
