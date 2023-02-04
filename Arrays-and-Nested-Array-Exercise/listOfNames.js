function listOfNames(arr) {
    return arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((el, i) => {
            console.log(`${i + 1}.${el}`);
        });
}

console.log(listOfNames(['John', 'Bob', 'Christina', 'Ema']));