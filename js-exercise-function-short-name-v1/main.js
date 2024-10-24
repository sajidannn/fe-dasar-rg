// TODO: answer here
function shortName(name, options) {
  if (!name.includes(' ')) {
    return 'Invalid Name'
  }

  let cutName = name.split(' ')
  if (options === 'first') {
    return `${cutName[0][0]}. ${cutName[1]}`
  } else if (options === 'last') {
    return `${cutName[0]} ${cutName[1][0]}.`
  } else if (options === 'full') {
    return name
  }
}

console.log(shortName('Anton Sabandi', 'last'))
module.exports = shortName