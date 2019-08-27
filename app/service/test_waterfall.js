const async = require('async')

function step1(cb) {
  cb(null, 9)
}

function step2(value, cb) {
  if (value > 10) {
    cb('error number > 10')
  } else {
    cb(null, 'success value')
  }
}

function step3(value, cb) {
  console.log('run in step3')
  cb(null, 'success step 3')
}

async.waterfall([step1, step2, step3], (err, result) => {
  /*
   * final result
   */
  if (err) {
    console.log('error ' + err)
  } else {
    /*
     * success
     */
    console.log(result)
  }
})
