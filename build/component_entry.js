const fs = require('fs')
const resolve = require('./resolve')

const files = fs
  .readdirSync(resolve('packages/'))
  .filter((file) => !~file.indexOf('.') && !['style', 'utils'].includes(file))

const entry = {}

files.forEach((x) => {
  entry[x] = resolve(`packages/${x}/index.js`)
})

module.exports = entry
