function addItem() {
    const selectMenu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    selectMenu.appendChild(option);
    text.value = '';
    value.value = '';
}