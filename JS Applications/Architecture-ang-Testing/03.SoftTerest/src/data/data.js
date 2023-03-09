import {
    get,
    post,
    del
} from "./api.js";
import {
    removeTokens,
    setTokens,
    toggleNav
} from "./util.js";

async function login(email, password) {
    const data = await post('/users/login', {
        email,
        password
    });
    setTokens(data.email, data._id, data.accessToken);
}

async function logout() {
    await get('/users/logout');
    removeTokens();
    toggleNav();
}

async function register(email, password) {
    const data = await post('/users/register', {
        email,
        password
    });
    setTokens(data.email, data._id, data.accessToken);
}

async function getData() {
    return await get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

async function getDataInfo(id) {
    return await get('/data/ideas/' + id);
}

async function delInfo(id) {
    return await del('/data/ideas/' + id);
}

async function createInfo(title, description, img) {
    return await post('/data/ideas', {title, description, img});
}


export {
    login,
    logout,
    register,
    getData,
    getDataInfo,
    delInfo,
    createInfo
}