function splitToArr(str) {
    if (str === undefined) {
        return 'Invalid input'
    } else if (str.length === 0) {
        return 'Data not available'
    }
    
    names = str.split(/[;-]/)
    return names.map(function (name) {
        return name[0].toUpperCase() + name.slice(1)
    })
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr