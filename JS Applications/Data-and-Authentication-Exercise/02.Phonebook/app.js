const url = 'http://localhost:3030/jsonstore/phonebook';

attachEvents();

function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadInfo);
    createBtn.addEventListener('click', createInfo);
}

async function loadInfo() {
    const ul = document.getElementById('phonebook');
    ul.replaceChildren();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();

        for (const id in data) {
            const name = data[id].person;
            const phone = data[id].phone;

            const li = createElements('li', `${name}: ${phone}`, id);
            const deleteBtn = createElements('button', 'Delete');
            li.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', deleteInfo);

            ul.appendChild(li);
        }

    } catch (error) {
        alert(error.message);
    }
}

async function deleteInfo(event) {
    const targetId = event.target.parentElement.dataset.id;
    const deletedUrl = `${url}/${targetId}`;

    try {
        const response = await fetch(deletedUrl, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error;
        }

        loadInfo();

    } catch (error) {
        alert(error.message);
    }
}

async function createInfo() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    if (personInput.value === '' || phoneInput.value === '') {
        alert('All fields must be filled!');
    }

    const entry = {
        person: personInput.value,
        phone: phoneInput.value,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaiotn/json'
            },
            body: JSON.stringify(entry)
        });

        if (!response.ok) {
            throw new Error;
        }

        loadInfo();
    } catch (error) {
        alert(error.message);
    }
}

function createElements(type, content, dataset) {
    const element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (dataset) {
        element.dataset.id = dataset;
    }

    return element;
}