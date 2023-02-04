function area(number) {
    const type = typeof(number);

    if (type === 'number') {
        const result = number ** 2 * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

area('name');
area(5)