function townsToJSON(arr) {
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude.replace(' |', '')).toFixed(2);
        const object = {
            'Town': town.replace('| ', ''),
            'Latitude': Number(latitude),
            'Longitude': Number(longitude),
        };

        result.push(object);
    }

    console.log(JSON.stringify(result));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);