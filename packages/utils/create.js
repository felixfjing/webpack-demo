import bem from './bem.js'
const KEY_COMPONENT_NAME = 'vp-'

export default function (sfc) {
  sfc.name = `${KEY_COMPONENT_NAME}${sfc.name}`
  sfc.mixins = sfc.mixins || []
  sfc.mixins.push(bem)

  return sfc
}
