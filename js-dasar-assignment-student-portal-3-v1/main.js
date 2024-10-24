function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi", 21],
        ["Fakultas Ekonomi", "Manajemen", 22],
        ["Fakultas Ekonomi", "Akuntansi", 23],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik", 31],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis", 32],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional", 33],
        ["Fakultas Teknik", "Teknik Sipil", 41],
        ["Fakultas Teknik", "Arsitektur", 42],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika", 51],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika", 52],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika", 53],
    ];

    const kodeProdi = +studentId.slice(4, 6)
    let prody = ''
    let faculty = ''

    const isPrody = facultyList.some(function (item) {
        if (item[2] === kodeProdi) {
            prody += item[1]
            faculty += item[0]
            return true
        }
    })

    if (!isPrody) {
        return `Invalid Student's ID`
    }

    const thesisLecturer = getLecturer(prody)

    const Student = {
        id: studentId,
        name: name,
        prody: prody,
        faculty: faculty,
        thesisLecturer: thesisLecturer
    }

    return Student
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    let result = ''

    lecturerList.some(function (item) {
        if (item[1] === prody) {
            result += item[0]
        }
    })

    return result
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
