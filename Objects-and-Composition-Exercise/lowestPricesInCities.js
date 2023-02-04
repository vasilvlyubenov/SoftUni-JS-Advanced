function lowestPrices(arr) {
    const resultObj = {};

    arr.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!resultObj.hasOwnProperty(product)) {
            resultObj[product] = {
                town,
                price
            };
        }

        if (resultObj[product].price > price) {
            resultObj[product] = {
                town,
                price
            };
        }

    });

    for (const key in resultObj) {
        console.log(`${key} -> ${resultObj[key].price} (${resultObj[key].town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);