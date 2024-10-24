// TODO: answer here
function minMax(str) {
  let minVal = str[0]
  let maxVal = str[0]

  for (let i = 0; i < str.length; i++) {
    if (str[i] < minVal) {
      minVal = str[i]
    }
    if (str[i] > maxVal) {
      maxVal = str[i]
    }
  }

  if (minVal == maxVal) {
    return 'Nilai terkecil dan terbesar adalah ' + minVal
  }

  return `Nilai terkecil adalah ${minVal}, dan terbesar adalah ${maxVal}.`
}

console.log(minMax("9746532"))
module.exports = minMax;