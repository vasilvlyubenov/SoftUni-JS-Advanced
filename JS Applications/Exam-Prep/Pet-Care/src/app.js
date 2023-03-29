import page from '../node_modules/page/page.mjs';
import { userLogout } from './data.js/auth.js';
import { decorateContext } from './middleware/context.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';


page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/logout', logout);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/dashboard', dashboardPage);
page.start();


async function logout(ctx) {
    await userLogout();
    ctx.page.redirect('/');
}