const mysql = require('mysql')
const { waterfall } = require('async')
const config = require('config')

class MyDB {
  constructor() {
    this.pool = mysql.createPool(config.get('mysql'))
  }

  getConnection(cb) {
    pool.getConnection(cb)
  }

  executeSql(sql, cb) {
    waterfall(
      [
        callback => {
          this.pool.getConnection(callback)
        },
        (con, callback) => {
          con.query(sql, (err, result) => {
            this.pool.releaseConnection(con)
            callback(err, result)
          })
        }
      ],
      cb
    )
  }
}

const mydb = new MyDB()
module.exports = mydb
