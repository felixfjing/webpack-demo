import Button from './button/index.js'

const pkg = require('../package.json')

const components = [
  Button
]

const install = function(Vue, opts = {}) {
  if (install.installed) return

  // eslint-disable-next-line array-callback-return
  components.forEach((ele) => {
    Vue.component(ele.name, ele)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: pkg.version,
  install,
  Button
}
