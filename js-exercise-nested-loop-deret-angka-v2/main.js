function deretanAngkaHinggaN(n) {
  let result = ''
  if (n <= 1) {
    return 'Incorrect param'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      result += j
    }
  }

  return result
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
