import { register, setTokens } from "../src/data/data.js";
import { navView } from "../src/data/util.js";
import { populateHome } from "./home.js";

const registerSection = document.getElementById('register-view');
const registerForm = registerSection.querySelector('form');
let context = null;

function showRegister(ctx) {
    document.querySelector('main').replaceChildren(registerSection);
    registerForm.reset();
    context = ctx;
}

registerForm.addEventListener('submit', registerUser);

async function registerUser(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const {email, password, rePass} = Object.fromEntries(formInput.entries());

    if (email === '' || password === '' || rePass === '') {
        return alert('All fields must be filled.');
    }

    if (password !== rePass) {
        return alert('Password doesn\'t match!')
    }
    
    const data = await register({email, password});
    setTokens(data.email, data._id, data.accessToken);
    registerForm.reset();
    navView();
    context.showViews('/home');
}


export {
    showRegister
}