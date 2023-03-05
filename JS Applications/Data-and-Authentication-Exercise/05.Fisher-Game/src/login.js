import { checkLogin } from "./app.js";
checkLogin();

const loginUrl = 'http://localhost:3030/users/login';

document.getElementById('login-form').addEventListener('submit', login);

async function login(event) {
    event.preventDefault();

    const loginForm = new FormData(event.target);

    const {email, password} = Object.fromEntries(loginForm.entries());

    if (email === '' || password === '') {
        return alert('All fields must me filled!');
    }

    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw err;
        }

        const tokens = await response.json();

        localStorage.setItem('email', tokens.email);
        localStorage.setItem('id', tokens._id);
        localStorage.setItem('accessToken', tokens.accessToken);
        event.target.reset();
        location = '../index.html';
    } catch (error) {
        document.getElementsByClassName('notification')[0].textContent = error.message;
    }
}
