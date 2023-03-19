import page from '../../node_modules/page/page.mjs';
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { logout } from "../data/data.js";
import { removeTokens } from "../data/util.js";

const guest = () => html `
<a id="catalogLink" href="/" class="active">Dashboard</a>
<div id="guest">
    <a id="loginLink" href="/login">Login</a>
    <a id="registerLink" href="/register">Register</a>
</div>`


const user = () => html `
<a id="catalogLink" href="/" class="active">Dashboard</a>
<div id="user">
    <a id="createLink" href="/create">Create Furniture</a>
    <a id="profileLink" href="/my-furniture" >My Publications</a>
    <a id="logoutBtn" href="javascript:void(0)">Logout</a>
</div>`

function toggleNavigation() {
    const nav = document.querySelector('nav');

    if (sessionStorage.accessToken) {
        render(user(), nav);
    } else {
        render(guest(), nav);
    }
}



document.querySelector('nav').addEventListener('click', async (e) => {
    if (e.target.textContent === 'Logout' && e.target.tagName === 'A') {
    await logout();
    removeTokens();
    toggleNavigation();
    page.redirect('/');
    }

});

export {
    toggleNavigation
}