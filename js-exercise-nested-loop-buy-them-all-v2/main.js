function buyThemAll(books, budget) {
  let list = books.split(',')
  let bookPrices = []
  let buy = []
  let expense = 0

  for (let book of list) {
    let [title, price] = book.split(':');
    bookPrices.push([title, Number(price)]);
  }

  for (let i = 0; i < bookPrices.length; i++) {
    if (budget - bookPrices[i][1] >= 0) {
      buy.push(bookPrices[i][0])
      expense += bookPrices[i][1]
      budget -= bookPrices[i][1]
    }
  }

  if (buy.length === 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`
  }

  return `Afista membeli ${buy.length} buku yaitu ${buy.join(', ')}. Total belanja ${expense}, sisa uang Afista adalah ${budget}.`
}

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

module.exports = buyThemAll;
