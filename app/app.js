const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const welcome = require('./controller/welcome')
const customer = require('./controller/customer')

const app = express()
app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000)
console.log('server start on port 3000')

app.use('/welcome', welcome)
app.use('/customer', customer)

module.exports = app
