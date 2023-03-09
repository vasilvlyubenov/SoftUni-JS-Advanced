import {
    login
} from "../src/data/data.js";
import {
    toggleNav
} from "../src/data/util.js";

const loginSection = document.getElementById('login');
const loginForm = loginSection.querySelector('form');

let view = null;

function loginView(context) {
    document.getElementById('view-container').replaceChildren(loginSection);
    loginForm.reset();
    view = context;
}

loginForm.addEventListener('submit', submitLogin);


async function submitLogin(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {
        email,
        password
    } = Object.fromEntries(formInput.entries());

    await login(email, password);
    loginForm.reset();
    toggleNav();
    view.showView('dashboard-view');
}


export {
    loginView
}