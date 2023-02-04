function sumTable() {
    const resultData = document.querySelector('#sum');
    const table = document.querySelectorAll('table tr');
    let result = 0;
    for (let i = 1; i < table.length - 1; i++) {
        const number = Number(table[i].lastChild.textContent);
        result += number;
    }
    resultData.textContent = result;
}