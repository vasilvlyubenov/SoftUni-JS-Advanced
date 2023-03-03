const url = 'http://localhost:3030/jsonstore/collections/books';
const loadBtn = document.getElementById('loadBooks');
const form = document.querySelector('form');
form.reset();
const formName = form.querySelector('h3');
const formBtn = form.querySelector('button');
let targetId = '';

loadBtn.addEventListener('click', loadAllBooks);
form.addEventListener('submit', addEditBooks);



async function loadAllBooks() {
    const table = document.querySelector('table tbody');
    table.replaceChildren();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();

        for (const key in data) {
            const title = data[key].title;
            const author = data[key].author;

            const tr = createElement('tr');
            const tdTitle = createElement('td', title);
            const tdAuthor = createElement('td', author);
            const tdButtons = createElement('td', null, key);
            const editBtn = createElement('button', 'Edit');
            const deleteBtn = createElement('button', 'Delete');
            tdButtons.appendChild(editBtn);
            tdButtons.appendChild(deleteBtn);

            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdButtons);

            table.appendChild(tr);

            editBtn.addEventListener('click', editInfo);
            deleteBtn.addEventListener('click', deleteInfo);
        }

    } catch (error) {
        alert(error.message);
    }
}

async function addEditBooks(event) {
    event.preventDefault();

    const tokes = new FormData(event.target);
    let targetUrl = url;
    let method = 'POST';

    const author = tokes.get('author');
    const title = tokes.get('title');

    if (author === '' || title === '') {
        alert('All fields must be filled!');
        throw new Error;
    }

    if (formBtn.textContent === 'Save') {
        formBtn.textContent = 'Submit';
        formName.textContent = 'FORM';
        targetUrl = `${url}/${targetId}`;
        method = 'PUT';
    }

    const object = {
        author,
        title
    };

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    };

    try {
        const response = await fetch(targetUrl, options);

        if (!response.ok) {
            throw new Error;
        }

    } catch (error) {
        alert(error.message);
    }
    form.reset();
    loadAllBooks();
}

async function deleteInfo(event) {
    const id = event.target.parentElement.dataset.id;
    const delUrl = `${url}/${id}`;
    try {
        const res = await fetch(delUrl, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error;
        }

    } catch (error) {
        alert(error.message);
    }
    loadAllBooks();
}

async function editInfo(event) {
    formBtn.textContent = 'Save';
    formName.textContent = 'Edit FORM';
    targetId = event.target.parentElement.dataset.id;

    document.querySelector('input[name=title]').value = event.target.parentElement.parentElement.cells[0].textContent;
    document.querySelector('input[name=author]').value = event.target.parentElement.parentElement.cells[1].textContent;

}

function createElement(tag, data, id) {
    const element = document.createElement(tag);

    if (data) {
        element.textContent = data;
    }

    if (id) {
        element.dataset.id = id;
    }

    return element;
}