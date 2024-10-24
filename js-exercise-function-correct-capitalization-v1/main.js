// TODO: answer here
function correctCapitalization(text) {
  let result = text[0].toUpperCase()
  for (let i = 1; i < text.length; i++) {
    if (text[i - 2] === '.' && text[i - 2]) {
      result += text[i].toUpperCase()
    } else {
      result += text[i]
    }
  }
  return result
}

console.log(correctCapitalization('ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company.'))
module.exports = correctCapitalization