function generateReport() {
    const headingsCheck = Array.from(document.querySelectorAll('thead tr th input'));
    const inputCheck = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];
    const output = document.getElementById('output');

    inputCheck.forEach(el => {
        const obj = {};
        Array.from(el.querySelectorAll('td')).forEach((text, index) => {
            if(headingsCheck[index].checked) {
                obj[headingsCheck[index].name] = text.textContent;
            } 
        });
        result.push(obj);
    });

    output.textContent = JSON.stringify(result);
}