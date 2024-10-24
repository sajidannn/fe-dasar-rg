function trasureHunter(dailyLog) {
  let treasure = 0
  for (const i of dailyLog) {
    if (i === '$') {
      treasure += 100
    } else {
      if (treasure === 0) {
        continue
      } else if (i === 'x') {
        treasure -= 10
      } else if (i === '#') {
        treasure /= 2
      }
    }
  }

  return treasure
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
