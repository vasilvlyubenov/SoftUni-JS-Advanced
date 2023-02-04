function solve() {
    const binOpt = document.createElement('option');
    const hexOpt = document.createElement('option');
    binOpt.value = 'binary';
    binOpt.textContent = 'Binary';
    hexOpt.value = 'hexadecimal';
    hexOpt.textContent = 'Hexadecimal';
    const select = document.querySelector('#selectMenuTo');
    select.appendChild(binOpt);
    select.appendChild(hexOpt);

    const button = document.querySelector('div button');

    button.addEventListener('click', convert);

    function convert() {
        const result = document.querySelector('#result');
        const number = Number(document.querySelector('#input').value);
        if (select.value === 'binary') {
            result.value = (number >>> 0).toString(2);
        } else if(select.value === 'hexadecimal') {
            result.value = number.toString(16).toUpperCase();
        }
    }
}