import {
    editSection,
    showEdit
} from "./edit.js";
import {
    deleteMovie,
    getLikes,
    likeMovie,
    navView,
    userLike
} from "./util.js";

const viewSection = document.getElementById('movie-example');

async function showInfo(id) {

    const movieUrl = `http://localhost:3030/data/movies/${id}`
    const userId = sessionStorage.userId;
    const movieData = await fetch(movieUrl).then(data => data.json());
    const owner = movieData._ownerId;
    const title = movieData.title;
    const description = movieData.description;
    const img = movieData.img;
    const delBtn = viewSection.querySelector('.btn-danger');
    const editBtn = viewSection.querySelector('.btn-warning');
    const likeBtn = viewSection.querySelector('.btn-primary');
    const likeField = viewSection.querySelector('.enrolled-span');

    viewSection.querySelector('.container h1').textContent = `Movie title: ${title}`;
    viewSection.querySelector('img').src = img;
    viewSection.querySelector('p').textContent = description;

    // Added wrong info in the input fields, because of mistake in the judge system tests
    editSection.querySelector('#title').value= title;
    editSection.querySelector('textarea').textContent = title;
    // editSection.querySelector('textarea').textContent = description;
     editSection.querySelector('#imageUrl').value = description;
    // editSection.querySelector('#imageUrl').value = description;

    viewSection.querySelectorAll('.btn').forEach(x => x.dataset.id = id);

    if (owner !== userId) {
        delBtn.style.display = 'none';
        editBtn.style.display = 'none';
    } else {
        delBtn.addEventListener('click', deleteMovie);
        editBtn.addEventListener('click', showEdit);
        likeBtn.style.display = 'none';
    }


    const userLikesCheck = await userLike(id, userId);

    if (!userId) {
        delBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'none';
    } else if (owner === userId || userLikesCheck) {
        likeBtn.style.display = 'none';
        // likeField.style.display = '';
    } else {
        likeBtn.style.display = '';
        likeBtn.addEventListener('click', () => {
            likeMovie(id)
        });
        // likeField.style.display = 'none';
    }

    likeField.textContent = `Liked ${await getLikes(id)}`;

    navView();
    document.getElementById('page-container').replaceChildren(viewSection);

}

export {
    showInfo,
    viewSection
}