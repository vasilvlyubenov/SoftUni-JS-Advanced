function math(num1, num2, operation) {

    const oper = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 % num2,
        '**': num1 ** num2,
    }

    console.log(oper[operation]);
}

math(3, 5.5, '*')