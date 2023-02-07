function autoEngineeringCompany(arr) {
    const models = {};

    arr.forEach(element => {
        let [brand, model, produced] = element.split(' | ');
        produced = Number(produced);

        if (!models.hasOwnProperty(brand)) {
            models[brand] = {};
        }

        if (!models[brand].hasOwnProperty(model)) {
            models[brand][model] = 0;
        }

        models[brand][model] += produced;
    });

    for (const brand in models) {
        console.log(`${brand}`);

        for (const model in models[brand]) {
            console.log(`###${model} -> ${models[brand][model]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);