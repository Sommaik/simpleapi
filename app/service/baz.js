class Baz {
  log() {
    console.log('Baz')
  }
}

class SuperBaz {
  log() {
    console.log('Super Baz')
  }
}

const baz = new Baz()
const superBaz = new SuperBaz()

exports.baz = baz
exports.superBaz = superBaz
