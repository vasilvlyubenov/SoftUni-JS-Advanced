import { checkLogin } from "./app.js";

const url = 'http://localhost:3030/users/register';

checkLogin();

document.getElementById('register-form').addEventListener('submit', register);

async function register(event) {

    event.preventDefault();

    const formInput = new FormData(event.target);

    const data = Object.fromEntries(formInput.entries());
    const email = data.email;
    const password = data.password;
    const rePass = data.rePass;

    if (email === '' || password === '' || rePass === '') {
        return alert('All fileds must be filled!');
    }

    if (password !== rePass) {
        return alert('Password doesn\'t match!');
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }
        const tokens = await response.json();

        localStorage.setItem('email', tokens.email);
        localStorage.setItem('id', tokens._id);
        localStorage.setItem('accessToken', tokens.accessToken);

        event.target.reset();
        location = '../index.html';
    } catch (err) {
        alert(err.message);
    }
}