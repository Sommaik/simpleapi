const parallel = require('async').parallel

function step1(cb) {
  setTimeout(() => {
    console.log('run in step 1')
    cb(null, 'step1 success')
  }, 200)
}

function step2(cb) {
  setTimeout(() => {
    console.log('run in step 2')
    cb(null, 'step2 success')
  }, 100)
}

parallel([step1, step2], (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})
