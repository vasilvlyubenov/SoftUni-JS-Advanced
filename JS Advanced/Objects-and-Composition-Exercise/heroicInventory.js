function heroicInventory(arr) {
    const resultArr = [];
    
    for (const line of arr) {
        let [name, level, items] = line.split(' / ');

        resultArr.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        });
    }

    return JSON.stringify(resultArr);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));