function koreksi(data, correction) {
    correction.forEach(corr => {
        let { type, ...newCorrection } = corr

        let existingRecord = data.find(d => d.salesName === newCorrection.salesName && d.salesDate === newCorrection.salesDate)

        if (type === 'tambah') {
            data.push(newCorrection)
        } else if (type === 'koreksi' && existingRecord) {
            existingRecord.totalSales = newCorrection.totalSales
        }
    });
}

function salesReport(data, correction) {

    if (correction) {
        koreksi(data, correction)
    }

    let bestSales = data[0].salesName

    let result = {
        monthlySales: 0,
        totalSalesByName: {
            Adi: 0,
            Budi: 0,
            Poltak: 0,
            Sri: 0,
            Udin: 0
        },
        bestSalesman: bestSales
    };

    data.forEach(element => {
        result.monthlySales += element.totalSales
        result.totalSalesByName[element.salesName] += element.totalSales
        if (result.totalSalesByName[element.salesName] > result.totalSalesByName[result.bestSalesman]) {
            result.bestSalesman = element.salesName
        }
    });

    result.bestSalesman = `Penjualan terbanyak dilakukan oleh ${result.bestSalesman} dengan total penjualan dalam 1 bulan sebesar ${result.totalSalesByName[result.bestSalesman]}`

    return result
}

data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    }
]

console.log(salesReport(data, correction));

module.exports = {
    salesReport,
}
