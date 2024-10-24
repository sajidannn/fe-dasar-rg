function convertItems(items) {
    let result = items.map(function (item) {
        return item.split('|')
    })

    return result
}

function filterItems(items) {
    return items.filter(function (item) {
        if (!item[1]) {
            return false
        }
        item[1] = Number(item[1])
        return true
    })
}

function generateSpareParts(items) {
    return items.map((item) => {
        let obj = {}

        obj.name = item[0]
        obj.price = item[1]
        obj.category = item[2]

        return obj
    });
}

function itemsStatistics(items) {
    let result = {}
    items.forEach(item => {
        if (!result[item[2]]) {
            result[item[2]] = 0
        }
        result[item[2]] += 1
    });

    return result
}

function generateItemsData(items) {
    const convertedItems = convertItems(items)
    const filteredItems = filterItems(convertedItems)
    const generatedSpareParts = generateSpareParts(filteredItems)
    const statistic = itemsStatistics(filteredItems)

    return {
        spare_parts: generatedSpareParts,
        statistics: statistic
    }
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}