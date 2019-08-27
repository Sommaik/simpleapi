const series = require('async').series

function step1(cb) {
  cb(null, 'step1 success')
}

function step2(cb) {
  cb(null, 'step2 success')
}

series([step1, step2], (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})
