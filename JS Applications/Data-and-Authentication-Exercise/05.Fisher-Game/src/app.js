import { showHome } from "../views/home.js";
import { showLogin } from "../views/login.js";
import { showRegister } from "../views/register.js";
import { get } from "./data/api.js";
import { removeTokens } from "./data/data.js";
import { navView } from "./data/util.js";

const main = document.querySelector('main');
document.getElementById('views').remove();

const views = {
    '/login': showLogin,
    '/register': showRegister,
    '/home': showHome,
    '/logout': logout,
};

navView();
showHome();

document.querySelector('nav').addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const url = new URL(event.target.href);
        showViews(url.pathname);
    }
})

async function logout() {
    await get('/users/logout');
    location.reload();
    removeTokens();
    navView();
}

const ctx = {
    showViews
}

function showViews(name, ...params) {
    const view = views[name];

    if (typeof view === 'function') {
        view(ctx, ...params);
    }
}

