function fruit(name, grams, priceKG) {
    const weight = grams / 1000;
    const money = weight * priceKG;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`);

}

fruit('orange', 2500, 1.80)