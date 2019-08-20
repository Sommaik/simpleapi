function _prom(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      reject('number greater then 10')
    } else {
      resolve('success')
    }
  })
}

function displayNumber(text) {
  return new Promise((resolve, reject) => {
    resolve('check number is ' + text)
  })
}

exports.checkNumber = _prom
exports.displayNumber = displayNumber
