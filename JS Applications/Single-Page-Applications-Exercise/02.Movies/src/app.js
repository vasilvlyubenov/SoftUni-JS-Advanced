import {
    showAddMovies
} from "./add.js";
import {
    showHome
} from "./home.js";
import {
    showLogin
} from "./login.js";
import {
    showRegistrationForm
} from "./register.js";
import {
    logout
} from "./util.js";

const logoutBtn = document.getElementById('logout');
const login = document.getElementById('login-btn');
const register = document.getElementById('register-btn');
const addBtn = document.getElementById('add-movie-button')
const movieBtn = document.querySelector('nav .text-light');


login.addEventListener('click', showLogin);
register.addEventListener('click', showRegistrationForm);
logoutBtn.addEventListener('click', logout);
addBtn.addEventListener('click', showAddMovies);
movieBtn.addEventListener('click', showHome);
document.querySelectorAll('.view-section').forEach(s => s.remove());

showHome();