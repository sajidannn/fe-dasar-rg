function travelSeat(passengers, seatColumn) {
    if (seatColumn <= 0) {
        return 'Invalid number'
    } else if (!passengers.length) {
        return 'Oops! tickets not sold!'
    }

    const sortedPassengers = passengers.slice().sort();

    let selisih = sortedPassengers.length % seatColumn;
    if (selisih !== 0) {
        for (let i = 0; i < seatColumn - selisih; i++) {
            sortedPassengers.push('Seat available');
        }
    }

    const result = [];

    for (let i = 0; i < sortedPassengers.length; i += seatColumn) {
        result.push(sortedPassengers.slice(i, i + seatColumn));
    }

    return result;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat