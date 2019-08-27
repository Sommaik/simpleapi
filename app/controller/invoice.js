const express = require('express')
const router = express.Router()
const mydb = require('../helper/mydb')
const excel = require('excel4node')

router.get('/excel', (req, res) => {
  const sql = 'select * from active_invoices'
  mydb.executeSql(sql, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      const wb = new excel.Workbook()
      const sheet = wb.addWorksheet('Sheet 1')
      for (let i = 0; i < result.length; i++) {
        sheet.cell(i + 1, 1).string(result[i].invoice_number)
        sheet.cell(i + 1, 2).number(result[i].invoice_total)
      }
      wb.write('example.xlsx', res)
    }
  })
})

module.exports = router
