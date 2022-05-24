/**
 * isNumber
 **/
function isNumber(obj) {
  return obj && Object.prototype.toString.call(obj) === '[object Number]'
}

module.exports = isNumber
exports = module.exports
