import {
    showHome
} from "./home.js";
import {
    navView
} from "./util.js";

const registerSection = document.getElementById('form-sign-up');
const regUrl = 'http://localhost:3030/users/register';

registerSection.querySelector('#register-form').addEventListener('submit', register);

function showRegistrationForm() {
    registerSection.querySelector('#register-form').reset();
    document.getElementById('page-container').replaceChildren(registerSection);
}

async function register(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {
        email,
        password,
        repeatPassword
    } = Object.fromEntries(formInput.entries());

    if (email === '' || password === '' || repeatPassword === '') {
        return alert('All fields must be filled!');
    }
    if (password.length < 6) {
        return alert('Password should be at least 6 characters!');
    }

    if (password !== repeatPassword) {
        return alert('Password doesn\'t match!');
    }

    try {
        const response = await fetch(regUrl, {
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

        navView();
        showHome();

        event.target.reset();
    } catch (error) {
        alert(error.message);
    }

}


export {
    showRegistrationForm
}