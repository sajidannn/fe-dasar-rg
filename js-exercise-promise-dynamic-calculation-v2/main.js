function calculatePromise(number1, number2) {
  return new Promise((resolve, reject) => {
    let result
    if (number1 === 0 && number2 === 0) {
      reject('number1 and number2 cannot be 0')
    } else if (number1 % 2 === 0 && number2 % 2 === 0) {
      result = number1 - number2
    } else if (number1 % 2 === 0 && number2 % 0 !== 0) {
      result = number1 + number2
    } else if (number1 % 2 !== 0) {
      result = number1 * number2
    }
    resolve(result)
  })
}

module.exports = calculatePromise;
