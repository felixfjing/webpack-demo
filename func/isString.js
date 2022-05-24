/**
 * isString
 **/
function isString(obj) {
  return obj && Object.prototype.toString.call(obj) === '[object String]'
}

module.exports = isString
exports = module.exports
