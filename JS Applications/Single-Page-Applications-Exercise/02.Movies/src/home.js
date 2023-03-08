import {
    navView
} from "./util.js";
import {
    showInfo
} from "./view.js";

const homeSection = document.getElementById('home-page');
const moviesUrl = 'http://localhost:3030/data/movies ';



function showHome() {
    document.getElementById('page-container').replaceChildren(homeSection);
    getMovies();
    navView()
}


async function getMovies() {
    const movieList = document.getElementById('movies-list');
    movieList.replaceChildren();

    try {
        const response = await fetch(moviesUrl);

        if (!response.ok) {
            throw await response.json();
        }

        const movies = await response.json();

        movies.forEach(movie => {
            const li = document.createElement('li');
            li.classList.add('card');
            li.dataset.id = movie._id;
            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = movie.img;

            const span = document.createElement('span');
            span.textContent = movie.title;

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Details';
            detailsButton.className = 'btn btn-primary';

            detailsButton.addEventListener('click', () => {
                showInfo(movie._id)
            });

            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(detailsButton);
            movieList.appendChild(li);
        });

    } catch (error) {
        alert(error.message);
    }
}


export {
    showHome
}