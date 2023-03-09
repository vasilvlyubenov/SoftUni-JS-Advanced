import { login, setTokens } from "../src/data/data.js";
import { navView } from "../src/data/util.js";
import { populateHome } from "./home.js";

const loginSection = document.getElementById('login-view');
const loginForm = loginSection.querySelector('form');
let context = null;

function showLogin(ctx) {
    document.querySelector('main').replaceChildren(loginSection);
    loginForm.reset();
    context = ctx;
}

loginForm.addEventListener('submit', postLogin);

async function postLogin(e) {
    e.preventDefault();
    const formInput = new FormData(e.target);
    const {email, password} = Object.fromEntries(formInput.entries());

    if (email === '' || password === '') {
        return alert('All fields must be fille');
    }
    
    const data = await login({email, password});
    
    setTokens(data.email, data._id, data.accessToken)
    loginForm.reset();
    navView();
    populateHome();
    context.showViews('/home');
}
export {
    showLogin
}