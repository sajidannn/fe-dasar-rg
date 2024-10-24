function countAndSum(number) {
  let result = 0
  for (let i = 1; i <= number; i++) {
    result += (i - 1) % 3 + 1
  }
  return result
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
