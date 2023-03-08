import {
    showHome
} from "./home.js";
import {
    showInfo,
    viewSection
} from "./view.js";
const logoutBtn = document.getElementById('logout');
const login = document.getElementById('login-btn');
const register = document.getElementById('register-btn');
const addBtn = document.getElementById('add-movie-button')
const welcome = document.querySelector('#welcome a');

async function logout() {
    const url = 'http://localhost:3030/users/logout';

    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        }
    })

    sessionStorage.clear();
    showHome();
}

function navView() {
    if (sessionStorage.getItem('accessToken') === null) {
        logoutBtn.style.display = 'none';
        login.style.display = '';
        register.style.display = '';
        addBtn.style.display = 'none';
        welcome.style.display = 'none';
    } else {
        logoutBtn.style.display = '';
        login.style.display = 'none';
        register.style.display = 'none';
        addBtn.style.display = '';

        welcome.style.display = '';
        welcome.textContent = `Welcome, ${sessionStorage.email}`
    }
}



async function deleteMovie(event) {

    const delId = `http://localhost:3030/data/movies/${event.target.dataset.id}`;

    await fetch(delId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.accessToken
        }
    });
    showHome();
}

async function likeMovie(id) {

    const likeUrl = `http://localhost:3030/data/likes`;

    await fetch(likeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.accessToken
        },
        body: JSON.stringify({
            movieId: id
        })
    });

    showInfo(id);
}

async function getLikes(id) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`;
    const res = await fetch(url);
    const result = res.json();
    return result;
}

async function userLike(movieId, userId) {
    if (!userId) {
        return false
    } else {
        const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;

        const likes = await fetch(url);
        const like = await likes.json();

        return like.length > 0;
    }
}


export {
    logout,
    navView,
    deleteMovie,
    likeMovie,
    getLikes,
    userLike
}