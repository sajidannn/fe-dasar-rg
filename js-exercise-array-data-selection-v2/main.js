function dataSelection(data, amount, start) {
    if (!data.length) {
        return 'Data not found'
    } else if (amount <= 0) {
        return 'Minimum amount is 1'
    } else if (typeof amount == 'string' || typeof start == 'string') {
        return 'Invalid command'
    } else if (start <= 0) {
        return 'Starting number cannot be below 0'
    }

    amount += start

    const result = data.slice(start - 1, amount - 1)

    return result
}

console.log(dataSelection(["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3));
console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection
