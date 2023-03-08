import {
    showHome
} from "./home.js";

const addMovies = document.getElementById('add-movie');
const addMoviesForm = addMovies.querySelector('#add-movie-form');
const addURL = 'http://localhost:3030/data/movies';

function showAddMovies() {
    addMoviesForm.reset();
    document.getElementById('page-container').replaceChildren(addMovies);

}

addMoviesForm.addEventListener('submit', addMovie);

async function addMovie(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {
        title,
        description,
        img,
    } = Object.fromEntries(formInput.entries());

    if (title === '' || description === '' || img === '') {
        return alert('All fields must be filled!');
    }

    try {
        const resposne = await fetch(addURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
            body: JSON.stringify({
                title,
                description,
                img,
                _ownerId: sessionStorage.userId
            })
        });

        if (!resposne.ok) {
            throw await resposne.json();
        }

        showHome();

    } catch (error) {
        alert(error.message);
    }

}

export {
    showAddMovies
}