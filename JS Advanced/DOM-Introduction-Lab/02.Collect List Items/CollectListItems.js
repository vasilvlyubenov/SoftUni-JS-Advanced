function extractText() {
    const result = document.getElementById('result');
    const items = document.getElementById('items').children;
    const itemsArr = Array.from(items);

    result.value = itemsArr.map(li => li.textContent).join('\n');
}