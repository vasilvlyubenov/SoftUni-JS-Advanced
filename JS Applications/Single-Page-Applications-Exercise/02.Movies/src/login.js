import {
    showHome
} from "./home.js";
import {
    navView
} from "./util.js";

const loginSection = document.getElementById('form-login');
const loginForm = loginSection.querySelector('#login-form');
const loginUrl = 'http://localhost:3030/users/login';
loginForm.addEventListener('submit', login);

function showLogin() {
    loginForm.reset();
    document.getElementById('page-container').replaceChildren(loginForm);
}

async function login(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {
        email,
        password
    } = Object.fromEntries(formInput.entries());

    if (email === '' || password === '') {
        return alert('All fields must be filled');
    }

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok) {
            throw await response.json();
        }

        const data = await response.json();

        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        loginForm.reset();
        navView();
        showHome();
    } catch (error) {
        alert(error.message);
    }
}

export {
    showLogin
}