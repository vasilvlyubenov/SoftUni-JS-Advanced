function diagonalSums(arr) {
    let main = 0;
    let sub = 0;

for (let i = 0; i < arr.length; i++) {
    main += arr[i][i];
    sub += arr[arr.length - i - 1][i];
}

console.log(`${main} ${sub}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);