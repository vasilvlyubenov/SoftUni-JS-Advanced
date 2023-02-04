function subSum(array, start, end) {

    if (!Array.isArray(array)) return NaN;
    if (start < 0) start = 0;
    if (end > array.length - 1) end = array.length - 1;

    const newArr = array.slice(start, end + 1);

    const result = newArr.map(Number).reduce((acc, number) => acc + number, 0);

    return result;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);