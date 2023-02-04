function jansNotation(arr) {
    const resultArr = [];
    const operations = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => b / a,
    };

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            resultArr.push(Number(arr[i]));
        } else {
            const operand = arr[i];
            if (resultArr.length < 2) {
                return `Error: not enough operands!`;
            }
            const numberA = resultArr.pop();
            const numberB = resultArr.pop();

            const result = operations[operand](numberA, numberB);
            resultArr.push(result);
        }
    }

    if (resultArr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(resultArr[0]);
    }
}

jansNotation([
    3,
    4,
    '+'
]);

jansNotation([5,
    3,
    4,
    '*',
    '-'
])