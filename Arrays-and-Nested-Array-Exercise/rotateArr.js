function rotateArr(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}

console.log(rotateArr(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));