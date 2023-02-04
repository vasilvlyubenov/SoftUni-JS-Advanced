function storeCatalogue(arr) {
    const catalog = {};
    arr.sort((a, b) => a.localeCompare(b));

    arr.forEach(element => {
        const char = element[0];

        if (!catalog.hasOwnProperty(char)) {
            catalog[char] = [];
        }
        
        if (char === element[0]) {
            catalog[char].push(element);
        }
    });
    
    for (const key in catalog) {
        console.log(key);
        for (const el of catalog[key]) {
            console.log(`  ${el.replace(' : ', ': ')}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);