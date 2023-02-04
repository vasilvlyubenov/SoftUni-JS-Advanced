function solve() {
    const [checkutton, clearButton] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const checkResult = document.querySelector('#check p');

    checkutton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);

    function check() {
        const input = Array.from(document.querySelectorAll('tbody tr'));
        const sudoArr = [];
        let isCorrect = true;
        
        input.forEach(row => {
            const rows = Array.from(row.querySelectorAll('input'));
            const tempArr = [];
            rows.forEach(cell => {
                const number = Number(cell.value)
                if (tempArr.includes(number)) {
                    isCorrect = false;
                    return
                }
                tempArr.push(number)
            });
            sudoArr.push(tempArr);
        });
        debugger
        for (let i = 0; i < sudoArr.length; i++) {
            const arr1 = sudoArr[0];
            const arr2 = sudoArr[1];
            const arr3 = sudoArr[2];

            if (arr1[i] === arr2[i] || arr2[i] === arr3[i] || arr1[i] === arr3[i]) {
                isCorrect = false;
                break;
            }
        }

        if (isCorrect) {
            table.style.border = '2px solid green';
            checkResult.style.color = 'green';
            checkResult.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkResult.style.color = 'red';
            checkResult.textContent = 'NOP! You are not done yet...';
        }
    }

    function clear() {
        const inputs = Array.from(document.querySelectorAll('tbody input'));
        inputs.map(el => el.value = '');
        table.style.border = 'none';
        checkResult.textContent = '';
    }
}