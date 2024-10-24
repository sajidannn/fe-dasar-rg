function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    const { kodeFakultas, tahunMasuk, kodeProdi } = getInfoStudID(studentId)
    const { prodi, fakultas } = determineFakultas(kodeProdi, kodeFakultas)

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${fakultas} sejak tahun ${tahunMasuk}.`
}

function getInfoStudID(studentId) {
    const kodeFakultas = studentId.slice(0, -10)
    const tahunMasuk = studentId.slice(-10, -6)
    const kodeProdi = studentId.slice(-6, -4)

    return { kodeFakultas, tahunMasuk, kodeProdi }
}

function determineFakultas(kodeProdi, kodeFakultas) {
    let prodi = ''
    let fakultas = ''

    switch (kodeFakultas) {
        case 'FE':
            fakultas = 'Fakultas Ekonomi'
            if (kodeProdi === '21') {
                prodi = 'Ekonomi'
            } else if (kodeProdi === '22') {
                prodi = 'Manajemen'
            } else if (kodeProdi === '23') {
                prodi = 'Akuntansi'
            }
            break;
        case 'FISIP':
            fakultas = 'Fakultas Ilmu Sosial dan Politik'
            if (kodeProdi === '31') {
                prodi = 'Administrasi Publik'
            } else if (kodeProdi === '32') {
                prodi = 'Administrasi Bisnis'
            } else if (kodeProdi === '33') {
                prodi = 'Hubungan Internasional'
            }
            break;
        case 'FT':
            fakultas = 'Fakultas Teknik'
            if (kodeProdi === '41') {
                prodi = 'Teknik Sipil'
            } else if (kodeProdi === '42') {
                prodi = 'Arsitektur'
            }
            break;
        case 'FTIS':
            fakultas = 'Fakultas Teknologi Informasi dan Sains'
            if (kodeProdi === '51') {
                prodi = 'Matematika'
            } else if (kodeProdi === '52') {
                prodi = 'Fisika'
            } else if (kodeProdi === '53') {
                prodi = 'Informatika'
            }
            break;
        default:
            break;
    }

    return { prodi, fakultas }
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
