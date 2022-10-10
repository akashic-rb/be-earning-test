const fs = require("fs")

const rawData = fs.readFileSync("./eng.json")
const engList = JSON.parse(rawData)
const listOf24Items = []
const listOf18Items = []
const listOf3Words = []
// form the array into 24 item list

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

const shuffled = shuffle(engList)
for (let i = 0; i < 24; i++) {
    listOf24Items.push({
        name: shuffled[i],
        index: i,
    })
}

// console.log(listOf24Items)

const shuffled24List = shuffle(listOf24Items)
for (let i = 0; i < 18; i++) {
    listOf18Items.push(shuffled24List[i])
}

// console.log(listOf18Items)

for (let i = 0; i < 6; i++) {
    const item = listOf18Items.splice(0, 3)
    const list = item.map(i => i.name)
    const primary = item[0].index
    listOf3Words.push({
        list,
        primary,
        "index-selected": -1
    })
}

console.log(listOf3Words)