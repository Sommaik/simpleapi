require('./service/foo')
foo()

const fnbar = require('./service/bar')
fnbar()

const fz = require('./service/fiz').fiz
fz()

const sfz = require('./service/fiz').simpleFiz
sfz()

const fnfiz = require('./service/fiz')
fnfiz.fiz()
fnfiz.simpleFiz()

const buz = require('./service/buz')
buz.log()

const baz = require('./service/baz')
baz.baz.log()
baz.superBaz.log()

const doo = require('./service/doo')
const dobj = new doo()
dobj.log()

const prom = require('./service/prom')

prom
  .checkNumber(2)
  .then(resp => {
    prom.displayNumber(resp).then(res2 => {
      console.log(res2)
    })
  })
  .catch(reason => {
    console.log(reason)
  })

async function showNumber() {
  let msg
  try {
    msg = await prom.checkNumber(2)
  } catch (e) {
    msg = e
  }
  let dsp = await prom.displayNumber(msg)
  return dsp
}

showNumber().then(resp => {
  console.log(resp)
})
/*
 *
const calc = require('./service/calculator');
const fs = require('fs');

fs.watchFile('message.txt', (curr, prev) => {
  console.log('file change');
  console.log(curr.size);
  // console.log(prev.data);
  fs.readFile('message.txt', 'utf-8', (err, data) => {
    console.log(data);
  });
});
*/
/**
 *

console.log(calc.add(1, 2));

function helloWorldCallback(grt) {
  grt('Hello', 'World');
}

function cb(a, b) {
  console.log(a + ' ' + b);
}

helloWorldCallback(cb);
*/
