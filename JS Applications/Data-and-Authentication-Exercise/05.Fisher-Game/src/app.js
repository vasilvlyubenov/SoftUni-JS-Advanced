const userName = localStorage.getItem('email');
const userId = localStorage.getItem('id');
const accessToken = localStorage.getItem('accessToken');
const catchesUrl = 'http://localhost:3030/data/catches';
const loadBtn = document.querySelector('.load');
const form = document.getElementById('addForm');

checkLogin();

document.getElementById('logout').addEventListener('click', logout);

if (loadBtn) {
    loadBtn.addEventListener('click', loadInfo);
}

if (form) {
    form.addEventListener('submit', addInfo);
}


async function loadInfo() {
    const content = document.getElementById('catches');
    content.replaceChildren();

    try {
        const response = await fetch(catchesUrl);

        if (!response.ok) {
            const err = response.json();
            throw err;
        }

        const data = await response.json();

        for (const element of data) {
            const angler = element.angler;
            const weight = element.weight;
            const species = element.species;
            const location = element.location;
            const bait = element.bait;
            const captureTime = element.captureTime;
            const id = element._id;
            const ownerId = element._ownerId;

            const catchEl = createItem(angler, weight, species, location, bait, captureTime, id, ownerId, userId);

            content.appendChild(catchEl);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function addInfo(event) {
    event.preventDefault();

    const newInfo = new FormData(event.target);
    const input = Object.fromEntries(newInfo.entries());

    const angler = input.angler;
    const weight = input.weight;
    const species = input.species;
    const location = input.location;
    const bait = input.bait;
    const captureTime = input.captureTime;

    if (angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === '') {
        return alert('All fields should be filler!');
    }

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }

    try {
        const response = await fetch(catchesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-Authorization': accessToken,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const err = response.json();
            throw err;
        }

        form.reset();
        loadInfo();
    } catch (error) {
        alert(error.message);
    }

}

async function logout() {

    const url = 'http://localhost:3030/users/logout';

    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${accessToken}`
        }

    });

    localStorage.clear();
    location = './index.html';
    checkLogin();
}

function checkLogin() {

    if (userName !== null) {
        document.querySelector('.email span').textContent = `${userName}`;
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = '';

        if (document.querySelector('.add')) {
            document.querySelector('.add').disabled = false;
        }
    } else {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('register').style.display = '';
        document.getElementById('login').style.display = '';


        if (document.querySelector('.add')) {
            document.querySelector('.add').disabled = true;
        }
    }

}

function createItem(angler, weight, species, location, bait, captureTime, id, ownerId, userId) {
    const catchDiv = document.createElement('div');
    catchDiv.className = 'catch';

    const anglerLabel = document.createElement('label');
    anglerLabel.textContent = 'Angler';
    let anglerInput = document.createElement('input');
    anglerInput.type = 'text';
    anglerInput.className = 'angler';
    anglerInput.value = angler;
    anglerInput = checkOwnership(anglerInput, ownerId, userId);
    console.log(anglerInput);
    const weightLabel = document.createElement('label');
    weightLabel.textContent = 'Weight';
    let weightInput = document.createElement('input');
    weightInput.type = 'text';
    weightInput.className = 'weight';
    weightInput.value = Number(weight);
    weightInput = checkOwnership(weightInput, ownerId, userId);

    const speciesLabel = document.createElement('label');
    speciesLabel.textContent = 'Species';
    let speciesInput = document.createElement('input');
    speciesInput.type = 'text';
    speciesInput.className = 'species';
    speciesInput.value = species;
    speciesInput = checkOwnership(speciesInput, ownerId, userId);

    const locationLabel = document.createElement('label');
    locationLabel.textContent = 'Location';
    let locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.className = 'location';
    locationInput.value = location;
    locationInput = checkOwnership(locationInput, ownerId, userId);

    const baitLabel = document.createElement('label');
    baitLabel.textContent = 'Bait';
    let baitInput = document.createElement('input');
    baitInput.type = 'text';
    baitInput.className = 'bait';
    baitInput.value = bait;
    baitInput = checkOwnership(baitInput, ownerId, userId);

    const captureTimeLabel = document.createElement('label');
    captureTimeLabel.textContent = 'Capture Time';
    let captureTimeInput = document.createElement('input');
    captureTimeInput.type = 'text';
    captureTimeInput.className = 'captureTime';
    captureTimeInput.value = Number(captureTime);
    captureTimeInput = checkOwnership(captureTimeInput, ownerId, userId);

    let updateBtn = document.createElement('button');
    updateBtn.className = 'update';
    updateBtn.textContent = 'Update';
    updateBtn.dataset.id = id;
    updateBtn = checkOwnership(updateBtn, ownerId, userId);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = id;
    deleteBtn = checkOwnership(deleteBtn, ownerId, userId);

    catchDiv.appendChild(anglerLabel);
    catchDiv.appendChild(anglerInput);
    catchDiv.appendChild(weightLabel);
    catchDiv.appendChild(weightInput);
    catchDiv.appendChild(speciesLabel);
    catchDiv.appendChild(speciesInput);
    catchDiv.appendChild(locationLabel);
    catchDiv.appendChild(locationInput);
    catchDiv.appendChild(baitLabel);
    catchDiv.appendChild(baitInput);
    catchDiv.appendChild(captureTimeLabel);
    catchDiv.appendChild(captureTimeInput);
    catchDiv.appendChild(updateBtn);
    catchDiv.appendChild(deleteBtn);

    updateBtn.addEventListener('click', updateInfo);
    deleteBtn.addEventListener('click', deleteInfo);

    return catchDiv;
}

async function updateInfo(event) {
    const info = Object.values(event.target.parentElement.children);
    const updateId = `${catchesUrl}/${event.target.dataset.id}`;

    const angler = info[1].value;
    const weight = info[3].value;
    const species = info[5].value;
    const location = info[7].value;
    const bait = info[9].value;
    const captureTime = info[11].value;

    if (angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === '') {
        return alert('All fields should be filler!');
    }

    try {
        const response = await fetch(updateId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime,
            })
        });

        if (!response.ok) {
            const err = response.json();
            throw err;
        }
        loadInfo();
    } catch (error) {
        alert(error.message);
    }

}

async function deleteInfo(event) {
    const id = event.target.dataset.id;
    const delId = `${catchesUrl}/${id}`;

    try {
        const response = await fetch(delId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            }
        });

        if (!response.ok) {
            const err = response.json();
            throw err;
        }

        loadInfo();
    } catch (error) {
        alert(error.message);
    }
}

function checkOwnership(element, owner, user) {
    if (owner === user) {
        element.disabled = false;
    } else {
        element.disabled = true;
    }
    return element;
}

export {
    checkLogin,
}