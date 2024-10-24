function zodiacSign(day, month) {
  let zodiak = ''

  switch (month) {
    case 'Desember':
      if (22 <= day && day <= 31) {
        zodiak = 'Capricorn'
      } else if (1 <= day && day <= 21) {
        zodiak = 'Sagittarius'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Januari':
      if (20 <= day && day <= 31) {
        zodiak = 'Aquarius'
      } else if (1 <= day && day <= 19) {
        zodiak = 'Capricorn'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Februari':
      if (19 <= day && day <= 29) {
        zodiak = 'Pisces'
      } else if (1 <= day && day <= 18) {
        zodiak = 'Aquarius'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Maret':
      if (21 <= day && day <= 31) {
        zodiak = 'Aries'
      } else if (1 <= day && day <= 20) {
        zodiak = 'Pisces'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'April':
      if (20 <= day && day <= 30) {
        zodiak = 'Taurus'
      } else if (1 <= day && day <= 19) {
        zodiak = 'Aries'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Mei':
      if (21 <= day && day <= 31) {
        zodiak = 'Gemini'
      } else if (1 <= day && day <= 20) {
        zodiak = 'Taurus'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Juni':
      if (21 <= day && day <= 30) {
        zodiak = 'Cancer'
      } else if (1 <= day && day <= 20) {
        zodiak = 'Gemini'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Juli':
      if (23 <= day && day <= 31) {
        zodiak = 'Leo'
      } else if (1 <= day && day <= 22) {
        zodiak = 'Cancer'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Agustus':
      if (23 <= day && day <= 31) {
        zodiak = 'Virgo'
      } else if (1 <= day && day <= 22) {
        zodiak = 'Leo'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'September':
      if (23 <= day && day <= 30) {
        zodiak = 'Libra'
      } else if (1 <= day && day <= 22) {
        zodiak = 'Virgo'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'Oktober':
      if (23 <= day && day <= 31) {
        zodiak = 'Scorpio'
      } else if (1 <= day && day <= 22) {
        zodiak = 'Libra'
      } else {
        return 'Input tanggal salah'
      }
      break;
    case 'November':
      if (22 <= day && day <= 30) {
        zodiak = 'Sagittarius'
      } else if (1 <= day && day <= 21) {
        zodiak = 'Scorpio'
      } else {
        return 'Input tanggal salah'
      }
      break;
    default:
      return 'Nama bulan salah'
  }

  return zodiak
}

console.log(zodiacSign(30, 'Desember'));
console.log(zodiacSign(31, 'Desember'));
console.log(zodiacSign(41, 'Desember'));
console.log(zodiacSign(31, 'Februari'));
console.log(zodiacSign(29, 'Februari'));
console.log(zodiacSign(29, 'Januari'));


module.exports = zodiacSign;
