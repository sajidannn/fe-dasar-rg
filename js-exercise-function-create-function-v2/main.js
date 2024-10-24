// TODO: answer here
function checkDatatype(input) {
  if (Array.isArray(input)) {
    return 'array'
  } else if (input === null) {
    return 'null'
  } else {
    return typeof input
  }

}

console.log(checkDatatype(null))

module.exports = { checkDatatype };