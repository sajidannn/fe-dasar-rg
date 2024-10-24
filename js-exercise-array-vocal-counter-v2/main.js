function vocalCounter(array) {
    const vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
    const vocals = array.filter(function (vocal) {
        return vowels.includes(vocal)
    })

    if (vocals.length) {
        return `Jumlah vokal yang ditemukan sebanyak ${vocals.length} berupa ${vocals.join('')}`
    }

    return 'Tidak ada huruf vokal yang ditemukan'
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
