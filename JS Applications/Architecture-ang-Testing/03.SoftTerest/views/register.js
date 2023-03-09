import { register } from "../src/data/data.js";
import { toggleNav } from "../src/data/util.js";

const registerSection = document.getElementById('register');
const registerForm = registerSection.querySelector('form');
let view = null;

function registerView(context) {
    document.getElementById('view-container').replaceChildren(registerSection);
    registerForm.reset();
    view = context;
}

registerForm.addEventListener('submit', registrationSubmit);

async function registrationSubmit(event) {
    event.preventDefault();
    
    const formInput = new FormData(event.target);
    const {email, password, repeatPassword} = Object.fromEntries(formInput.entries());

    if (email.length < 3) {
        return alert('E-mail should be at least 3 charachters long!');
    }

    if (password.length < 3) {
        return alert('Password should be at least 3 charachters long!');
    }

    if (password !== repeatPassword) {
        return alert('Password doesn\'t match!');
    }

    await register(email, password);
    toggleNav();
    registerForm.reset();
    view.showView('home-view')
}

export {
    registerView
}