function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    switch (programId) {
        case 'ACC':
            programId = 'Akuntansi'
            break;
        case 'HIN':
            programId = 'Hubungan Internasional'
            break;
        case 'IAB':
            programId = 'Ilmu Administrasi Bisnis'
            break;
        case 'IAP':
            programId = 'Ilmu Administrasi Publik'
            break;
        case 'MJN':
            programId = 'Manajemen'
            break;
        case 'TKM':
            programId = 'Teknik Kimia'
            break;
        default:
            'Program ID tidak valid';
    }

    let totalSKS = 24

    if (gpa > 2.99 && gpa <= 4) {
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalSKS} SKS untuk semester depan.`;
    } else if (gpa >= 2.5 && gpa <= 2.99) {
        totalSKS = 21;
    } else if (gpa >= 2 && gpa < 2.5) {
        totalSKS = 18;
    } else if (gpa >= 1.5 && gpa < 2) {
        totalSKS = 15;
    } else if (gpa >= 0 && gpa < 1.5) {
        totalSKS = 12;
    } else {
        return 'Invalid gpa number';
    }

    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak ${totalSKS} SKS untuk semester depan.`;

}

krsApplication("Tommy", "ACC", "0")

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
