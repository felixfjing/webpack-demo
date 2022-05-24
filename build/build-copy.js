const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

const resolve = (p) => path.resolve(__dirname, '../', p)

const fileList = fs.readdirSync(resolve('func'))

fileList.forEach((item, index) => {
  const fileName = item.match(/(\S*).js/)

  if (fileName[1] !== 'index') {
    fsExtra.copy(resolve(`func/${item}`), resolve(`${item}`))
      .then(x => {
        if (index === fileList.length - 1) {
          console.log('Copy complete.\n')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
})
