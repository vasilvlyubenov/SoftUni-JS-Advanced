function addItem() {
    const ul = document.getElementById('items');
    const text = document.getElementById('newItemText').value;

    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    const a = document.createElement('a');
    a.setAttribute('href','#');
    a.textContent = '[Delete]';
    li.appendChild(a);

    a.addEventListener('click', () => {
        ul.removeChild(a.parentElement);
    });
}