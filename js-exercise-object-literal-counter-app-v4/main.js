function counterApp(arr) {
    if (arr === undefined) {
        return 'Invalid input'
    } else if (!arr.length) {
        return 'Data not found'
    }

    counts = {}
    arr.forEach(function (item) {
        counts[item] = (counts[item] || 0) + 1
    })

    return counts
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
