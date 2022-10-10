
const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

export const gen24SeedPhrase = async() => {
    const listOf24Items = []
    const rawData = await fetch("eng.json", { 
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } 
    })
    const engList = await rawData.json()
    const shuffled = shuffle(engList)
    for (let i = 0; i < 24; i++) {
        listOf24Items.push({
            name: shuffled[i],
            index: i,
        })
    }
    return listOf24Items
}

export const get18SeedPhrase = async(array) => {
    const listOf18Items = []
    const shuffled24Items = shuffle(array)
    for (let i = 0; i < 18; i++) {
        listOf18Items.push(shuffled24Items[i])
    }
    return listOf18Items
}

export const get3SeedPhrase = async(array) => {
    const listOf3Words = []

    for (let i = 0; i < 6; i++) {
        const item = array.splice(0, 3)
        const list = item.map(i =>  { 
            return { name: i.name, index: i.index }
        })
        const index = Math.floor(Math.random() * 3)
        const primary = item[index]?.index
        listOf3Words.push({
            list,
            primary,
            "index-selected": -1
        })
    }

    return listOf3Words
}