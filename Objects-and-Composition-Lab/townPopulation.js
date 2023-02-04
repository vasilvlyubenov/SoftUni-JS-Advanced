function townPopulation(arr) {
    const result = {};

    for (const element of arr) {
        let [city, population] = element.split(' <-> ');

        if (!result.hasOwnProperty(city)) {
            result[city] = 0;
        }
            result[city] += Number(population);
    }
    
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);;
    }
}

console.log(townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
));
console.log(townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
));