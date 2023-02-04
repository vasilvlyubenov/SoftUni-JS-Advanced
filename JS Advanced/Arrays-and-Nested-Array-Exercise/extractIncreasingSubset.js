function extract(arr) {
    let biggetsNum = arr[0];

    return arr.reduce((acc, curr) => {
        if (biggetsNum <= curr) {
            acc.push(curr);
            biggetsNum = curr;
        }
        return acc;
    },[]); 
}

console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

    // console.log(extract([20, 
    //     3, 
    //     2, 
    //     15,
    //     6, 
    //     1]
    //     ));