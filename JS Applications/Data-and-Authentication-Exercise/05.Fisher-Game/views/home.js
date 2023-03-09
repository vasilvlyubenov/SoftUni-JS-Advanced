import {
    del
} from "../src/data/api.js";
import {
    add,
    deleteFunc,
    getCatches,
    updateFunc
} from "../src/data/data.js";
import {
    createInput,
    createLabel
} from "../src/data/util.js";

const homeSection = document.getElementById('home-view');
const catches = homeSection.querySelector('#catches');
const addCatch = homeSection.querySelector('form');
const loadBtn = homeSection.querySelector('aside .load');

loadBtn.addEventListener('click', populateHome);

function showHome() {
    document.querySelector('main').replaceChildren(homeSection);

    if (sessionStorage.getItem('accessToken')) {
        homeSection.querySelector('aside .add').disabled = false;
    } else {
        homeSection.querySelector('aside .add').disabled = true;
    }
}

addCatch.addEventListener('submit', addNewCatch);

async function addNewCatch(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    } = Object.fromEntries(formInput.entries());

    if (angler === '' || weight === "" || species === '' || location === '' || bait === '' || captureTime === '') {
        return alert('All fields have to be filled!');
    }

    await add({
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    });
    populateHome();
}

async function populateHome() {
    const catchData = await getCatches();
    catches.replaceChildren();

    catchData.forEach(element => {
        const user = sessionStorage.getItem('id');
        const owner = element._ownerId;
        const angler = element.angler;
        const weight = Number(element.weight);
        const species = element.species;
        const location = element.location;
        const bait = element.bait;
        const captureTime = Number(element.captureTime);
        const id = element._id;
        const isAuthor =  owner && owner === user ? false : true;

        const div = document.createElement('div');
        div.className = 'catch';

        const anglerLabel = createLabel('Angler');
        const anglerInput = createInput('angler', angler, isAuthor);
        const weightLabel = createLabel('Weight');
        const weightInput = createInput('weight', weight, isAuthor);
        const speciesLabel = createLabel('Species');
        const speciesInput = createInput('species', species, isAuthor);
        const locationLabel = createLabel('Location');
        const locationInput = createInput('location', location, isAuthor);
        const baitLabel = createLabel('Bait');
        const baitInput = createInput('bait', bait, isAuthor);
        const captureTimeLabel = createLabel('Capture Time');
        const captureTimeInput = createInput('captureTime', captureTime, isAuthor);

        const updateBtn = document.createElement('button');
        updateBtn.className = 'update';
        updateBtn.dataset.id = id;
        updateBtn.disabled = isAuthor;
        updateBtn.textContent = 'Update';

        const delBtn = document.createElement('button');
        delBtn.className = 'delete';
        delBtn.dataset.id = id;
        delBtn.disabled = isAuthor;
        delBtn.textContent = 'Delete';

        div.appendChild(anglerLabel);
        div.appendChild(anglerInput);
        div.appendChild(weightLabel);
        div.appendChild(weightInput);
        div.appendChild(speciesLabel);
        div.appendChild(speciesInput);
        div.appendChild(locationLabel);
        div.appendChild(locationInput);
        div.appendChild(baitLabel);
        div.appendChild(baitInput);
        div.appendChild(captureTimeLabel);
        div.appendChild(captureTimeInput);
        div.appendChild(updateBtn);
        div.appendChild(delBtn);

        catches.appendChild(div);

        if (owner === user) {
            updateBtn.addEventListener('click', updateCatch);
            delBtn.addEventListener('click', deleteCatch);
        }
    });
}

async function updateCatch(event) {

    const parent = event.target.parentElement;
    const targetId = event.target.dataset.id;
    parent.querySelector('.angler').value;

    const angler = parent.querySelector('.angler').value;
    const weight = Number(parent.querySelector('.weight').value);
    const species = parent.querySelector('.species').value;
    const location = parent.querySelector('.location').value;
    const bait = parent.querySelector('.bait').value;
    const captureTime = Number(parent.querySelector('.captureTime').value);

    await updateFunc(targetId, {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    });

    populateHome();
}

async function deleteCatch(event) {
    const id = event.target.dataset.id;
    await deleteFunc(id);
    populateHome();
}



export {
    showHome,
    populateHome
}