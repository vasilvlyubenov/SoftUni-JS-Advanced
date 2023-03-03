const url = 'http://localhost:3030/jsonstore/collections/students';
const form = document.getElementById('form');

form.addEventListener('submit', postNewStudent);

getData();

async function getData() {
    const table = document.querySelector('#results tbody');
    table.replaceChildren();
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        
        for (const student in data) {
            const firstName = data[student].firstName;
            const lastName = data[student].lastName;
            const facultyNumber = data[student].facultyNumber;
            const grade = data[student].grade;

            const row = createElement('tr');
            const tdFirstName = createElement('td', firstName);
            const tdLastName = createElement('td', lastName);
            const tdNumber = createElement('td', facultyNumber);
            const tdGrade = createElement('td', grade);

            row.appendChild(tdFirstName);
            row.appendChild(tdLastName);
            row.appendChild(tdNumber);
            row.appendChild(tdGrade);

            table.appendChild(row);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function postNewStudent(event) {
    event.preventDefault();
    const fieldData = new FormData(event.target);
    const data = Object.fromEntries(fieldData.entries());
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error;
        }
    } catch (error) {
        alert(error.message);
    }
    getData();
}

function createElement(tag, data) {
    const element = document.createElement(tag);

    if (data) {
        element.textContent = data;
    }

    return element;
}