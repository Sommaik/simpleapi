const express = require('express')
const router = express.Router()
const mydb = require('../helper/mydb')
const auth = require('../helper/auth')

router.get('', (req, res) => {
  mydb.executeSql('select * from customers', (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

router.post('', auth.authenticate(), (req, res) => {
  const sql = `
    insert into customers(
        customer_first_name,
        customer_last_name,
        customer_address,
        customer_city,
        customer_state,
        customer_zip,
        customer_phone
    )values(
        '${req.body.firstName}',
        '${req.body.lastName}',
        '${req.body.address}',
        '${req.body.city}',
        '${req.body.state}',
        '${req.body.zip}',
        '${req.body.phone}'
    )
    `
  mydb.executeSql(sql, (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

router.delete('/:customerId', auth.authenticate(), (req, res) => {
  const sql = `
  delete from customers
  where customer_id = ${req.params.customerId}
  `
  mydb.executeSql(sql, (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

router.put('/:customerId', auth.authenticate(), (req, res) => {
  const sql = `
  update customers
  set customer_first_name = '${req.body.firstName}',
  customer_last_name = '${req.body.lastName}',
  customer_address = '${req.body.address}',
  customer_city = '${req.body.city}',
  customer_state = '${req.body.state}',
  customer_zip = '${req.body.zip}',
  customer_phone = '${req.body.phone}'
  where customer_id = ${req.params.customerId}
  `
  mydb.executeSql(sql, (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

module.exports = router
