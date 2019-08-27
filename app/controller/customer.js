const express = require('express')
const router = express.Router()
const mydb = require('../helper/mydb')

router.get('', (req, res) => {
  mydb.executeSql('select * from customers', (err, result) => {
    if (err) {
      res.end(err)
    } else {
      res.json(result)
    }
  })
})

router.post('', (req, res) => {
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
  waterfall(
    [
      step1,
      (con, cb) => {
        con.query(sql, (err, result) => {
          pool.releaseConnection(con)
          cb(err, result)
        })
      }
    ],
    (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.json(result)
      }
    }
  )
})

// router.get('', (req, res) => {
//   const sql = 'select * from customers'
//   pool.getConnection((err, con) => {
//     if (err) {
//       res.send(err)
//     } else {
//       con.query(sql, (err, result) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.json(result)
//         }
//       })
//     }
//   })
// })

module.exports = router
