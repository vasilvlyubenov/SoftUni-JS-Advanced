function subtract() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);
    const resultField = document.getElementById('result');

    const result = firstNumber - secondNumber;
    resultField.textContent = result;

}