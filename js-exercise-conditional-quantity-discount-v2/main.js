function quantityDiscount(quantity, price) {
  let discount = 0
  if (quantity >= 10) {
    discount = 0.20
  } else if (quantity >= 5) {
    discount = 0.15
  }
  let totalDiscount = quantity * price * discount
  let totalPrice = quantity * price - totalDiscount
  let tax = totalPrice * 0.11
  return totalPrice + tax
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
