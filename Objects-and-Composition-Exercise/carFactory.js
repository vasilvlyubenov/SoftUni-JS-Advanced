function carFactory(inputObject) {
    let engine = {};

    const engineSize = {
        small: {
            power: 90,
            volume: 1800,
        },
        normal: {
            power: 120,
            volume: 2400,
        },
        monster: {
            power: 200,
            volume: 3500
        }
    };

    const carriageType = {
        hatchback: {
            type: 'hatchback',
            color: inputObject.color,
        },
        coupe: {
            type: 'coupe',
            color: inputObject.color,
        }
    };
    
    const wheels = inputObject.wheelsize % 2 === 0 ? inputObject.wheelsize - 1 : inputObject.wheelsize;

    if (inputObject.power <= engineSize.small.power) {
        engine = {...engineSize.small};
    } else if (inputObject.power <= engineSize.normal.power) {
        engine = {...engineSize.normal};
    } else {
        engine = {...engineSize.monster};
    }

    const carriage = carriageType[inputObject.carriage];

    return {
        model: inputObject.model,
        engine: engine,
        carriage: carriage,
        wheels: Array(4).fill(wheels),
    };

}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));