function processOddPosition(arr) {
    return arr.filter((n, i) => i % 2 !== 0).map(n => n * 2).reverse().join(' ');
}

console.log(processOddPosition([10, 15, 20, 25]));
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));