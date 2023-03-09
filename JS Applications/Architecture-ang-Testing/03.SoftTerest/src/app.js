import { createView } from "../views/create.js";
import { dashboardView } from "../views/dashboard.js";
import { detailsView } from "../views/details.js";
import { homeView } from "../views/home.js";
import { loginView } from "../views/login.js";
import { registerView } from "../views/register.js";
import { logout } from "./data/data.js";
import { toggleNav } from "./data/util.js";

const nav = document.querySelector('nav');

const views = {
    'home-view': homeView,
    'register-view': registerView,
    'login-view': loginView,
    'dashboard-view': dashboardView,
    'details': detailsView,
    'create-view': createView,
};

document.getElementById('view-container').replaceChildren();
document.getElementById('logout').addEventListener('click', logout);

toggleNav();
homeView();

nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
        const id = event.target.id;
        showView(id);
    }
});

const context = {
    showView
};

function showView(name,...params) {
    const view = views[name];
    if (typeof view === 'function') {
        view(context,...params);
    }
}