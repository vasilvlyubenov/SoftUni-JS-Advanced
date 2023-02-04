function aggregate(array) {

    const sum = array.reduce((a, b) => a + b);
    const inverse = inverseValuesCalc(array);
    const arrToString = array.join('');

    console.log(sum);
    console.log(inverse);
    console.log(arrToString);

    function inverseValuesCalc(array) {
        let result = 0;
        for (const num of array) {
            result += 1/num;
        }

        return result;
    }
}