function calculator() {
    let fieldOne;
    let fieldTwo;
    let resultField;

    return {
        init: (selector1, selector2, resultSelector) => {
            fieldOne = document.querySelector(selector1);
            fieldTwo = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => {
            (resultField.value = +fieldOne.value + +fieldTwo.value);
        },
        subtract: () => {
            (resultField.value = +fieldOne.value - +fieldTwo.value);
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




