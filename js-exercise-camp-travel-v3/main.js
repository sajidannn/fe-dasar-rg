function travelDiscount(id, amount) {
    let status = ''
    let discount = 0
    let harga = 0
    let total = 0
    let hargaTotal = 0

    if (id.includes('STD')) {
        status = 'STUDENT'
    } else if (id.includes('CORP')) {
        status = 'CORPORATE'
    } else {
        return 'Maaf, voucher yang anda miliki tidak valid!'
    }

    if (status === 'STUDENT') {
        if (amount > 20) {
            discount = 0.20
        }
        harga = 20000
    } else if (status === 'CORPORATE') {
        if (amount > 30) {
            discount = 0.25
        }
        harga = 50000
    }

    total = harga * amount
    hargaTotal = total - (total * discount)

    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${hargaTotal}.`
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
