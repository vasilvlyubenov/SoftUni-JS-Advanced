function addItem() {
    const ul = document.getElementById('items');
    const text = document.getElementById('newItemText').value;

    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}