function argumentInfo(...args) {
    const result = {};

    args.forEach(arg => {
        if (!result.hasOwnProperty(typeof arg)) {
            result[typeof arg] = 0;
        }
        result[typeof arg]++;

        console.log(`${typeof arg}: ${arg}`);
    });

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (const [type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob'}, 3.333, 9.999);