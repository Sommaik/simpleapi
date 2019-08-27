const mysql = require('mysql')
const { waterfall } = require('async')

class MyDB {
  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root', // root
      password: '1234', //
      database: 'ex',
      connectionLimit: 10,
      multipleStatements: true
    })
  }
  getConnection(cb) {
    this.pool.getConnection(cb)
  }
  executeSql(sql, cb) {
    waterfall(
      [
        this.getConnection,
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
