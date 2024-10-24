function reverseUnique(word) {
  let current = ''
  let result = ''

  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== current) {
      result += word[i]
    }
    current = word[i]
  }

  return result
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
