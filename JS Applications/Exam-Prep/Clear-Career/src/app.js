import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { createPage } from '../views/create.js';
import { dashboardPage } from '../views/dashboard.js';
import { detailsPage } from '../views/details.js';
import { editPage } from '../views/edit.js';
import { homePage } from '../views/home.js';
import { layoutTemplate, logout } from '../views/layout.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { deleteOffer } from './data/data.js';
import { getUserTokens } from './util.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/create', createPage);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logout);
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderLayout;
    ctx.deleteOffer = deleteOffer;

    next();
}

function renderLayout(content) {
    const userData = getUserTokens();
    render(layoutTemplate(userData, content), root);
}