const fs = require('fs')
const tac = require('./index')
const assert = require('assert')

const stream = tac('./package.json')
let data = ''

stream.on('data', chunk => {
  data += chunk
})

stream.on('end', () => {
  data = data.split('\n').filter(val => val !== '').reverse().join('\n')
  const realFile = fs.readFileSync('./package.json', { encoding: 'utf8' }).split('\n').filter(val => val !== '').join('\n')
  assert(realFile === data, 'The test failed')
  console.log('test passed')
})
