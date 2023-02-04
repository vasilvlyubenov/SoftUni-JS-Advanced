function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b).splice(2, arr.length);

    console.log(arr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);