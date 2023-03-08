import {
    showInfo
} from "./view.js";

const editSection = document.getElementById('edit-movie');
const editForm = editSection.querySelector('form');
editForm.addEventListener('submit', edtiMovie);
let movieId = null;

function showEdit(event) {
    movieId = event.target.dataset.id;
    document.getElementById('page-container').replaceChildren(editSection);

}


async function edtiMovie(event) {
    event.preventDefault();
    const editURL = `http://localhost:3030/data/movies/${movieId}`

    const formInput = new FormData(event.target);
    const formData = Object.fromEntries(formInput.entries());
    const title = formData.title;
    const description = formData.description;
    const img = formData.img;

    if (title === '' || description === '' || img === '') {
        return alert('All fields must be filled');
    }

    try {
        const response = await fetch(editURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
            body: JSON.stringify({
                title,
                description,
                img
            })
        });

        if (!response.ok) {
            return await response.json();
        }
        debugger
        showInfo(movieId)
    } catch (error) {
        alert(error.message);
    }
}

export {
    showEdit,
    editSection,
}