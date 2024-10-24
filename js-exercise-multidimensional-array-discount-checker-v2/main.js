function discountChecker(costumers, date) {
    const harga = []
    costumers.forEach(item => {
        harga.push(item[0].split(' ')[1])
    });



    const result = []
    const day = date.slice(1, 2)
    for (let i = 0; i < costumers.length; i++) {
        if (harga[i] % 2 === day % 2 || costumers[i][1] === 'member') {
            result.push(costumers[i])
        }
    }

    return result
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
