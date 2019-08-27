const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const welcome = require('./controller/welcome')
const customer = require('./controller/customer')
const login = require('./controller/login')
const auth = require('./helper/auth')
const upload = require('./controller/upload')

const app = express()
app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

app.listen(3000)
console.log('server start on port 3000')

app.use('/welcome', welcome)
app.use('/customer', customer)
app.use('/login', login)
app.use('/upload', upload)

module.exports = app
