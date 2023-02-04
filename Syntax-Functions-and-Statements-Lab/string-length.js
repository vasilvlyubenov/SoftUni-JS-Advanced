function stringLength(strOne, strTwo, strThree) {
    const string = strOne + strTwo + strThree;

    console.log(string.length);
    console.log(Math.floor(string.length / 3));
}

stringLength('chocolate', 'ice cream', 'cake')