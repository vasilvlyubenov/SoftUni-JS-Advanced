function printEveryN(arr, count) {
    return arr.filter((_, i) => i % count === 0);
}

console.log(printEveryN(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));