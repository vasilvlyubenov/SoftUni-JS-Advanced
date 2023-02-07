function juiceFlavors(arr) {
    const juices = {};
    const result = {};

    arr.forEach(line => {
        lineArr = line.split(' => ');
        const name = lineArr[0];
        const liters = Number(lineArr[1]);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += liters;

        if (juices[name] >= 1000) {
            let quantitie = 0;

            while (juices[name] >= 1000) {
                juices[name] -= 1000;
                quantitie++;


                if (quantitie > 0) {
                    if (result.hasOwnProperty(name)) {
                        result[name]++;
                    } else {
                        result[name] = quantitie;
                    }
                }
            }
        }


    });

    for (const name in result) {
        console.log(`${name} => ${result[name]}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);