function getFibonator() {
    let printed = false;
    let nums = [0, 1];

    return () => {

        if (printed === false) {
            printed = true;
            return 1;
        }
        const num = nums[nums.length - 2] + nums[nums.length - 1];

        nums.push(num);
        return num;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
