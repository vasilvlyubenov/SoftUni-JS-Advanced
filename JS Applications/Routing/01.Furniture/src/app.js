import page from '../node_modules/page/page.mjs';
import { showView } from "./middleware/middleware.js";
import { createView } from './views/create.js';
import { dashboardView } from "./views/dashboard.js";
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMy } from './views/my-furniture.js';
import { toggleNavigation } from './views/navigation.js';
import { registerView } from './views/register.js';



toggleNavigation();

page(showView);
page('/index.html', '/');
page('/', dashboardView);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/my-furniture', showMy);
page('/login', showLogin);
page('/register', registerView);
page('/create', createView);
page.start();


