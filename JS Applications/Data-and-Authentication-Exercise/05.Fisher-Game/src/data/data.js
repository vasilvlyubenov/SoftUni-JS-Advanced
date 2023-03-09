import { del, get, post, update } from "./api.js";

async function login(data) {
    return await post('/users/login', data)
}

function setTokens(email, id, accessToken) {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('accessToken', accessToken);
}

function removeTokens() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('accessToken');
}

async function register(data) {
    return await post('/users/register', data);
}

async function getCatches() {
    return await get('/data/catches');
}

async function deleteFunc(id) {
    return await del('/data/catches/' + id);
}

async function updateFunc(id, data) {
    return await update('/data/catches/' + id, data);
}

async function add(data) {
    return await post('/data/catches', data);
}


export {
    login,
    setTokens,
    removeTokens,
    register,
    getCatches,
    deleteFunc,
    updateFunc,
    add
}