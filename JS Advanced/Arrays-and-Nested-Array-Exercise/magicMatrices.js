function magicMatrices(matrix) {
    
    const target = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < matrix.length; i++) {
        let sumRows = matrix[i].reduce((acc, curr) => acc + curr);
        let sumCols = 0;


        for (let j = 0; j < matrix.length; j++) {
            sumCols += matrix[j][i];
        }
        
        
        if (sumRows !== target || sumCols !== target) {
            return false;
        }

    }

    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
console.log(magicMatrices(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
));