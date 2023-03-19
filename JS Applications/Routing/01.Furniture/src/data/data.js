import { del, get, post, put } from "./api.js";

const urls = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    catalog: '/data/catalog',
};

async function register(userData) {
    return await post(urls.register, userData);
}

async function login(userData) {
    return await post(urls.login, userData);
}

async function logout() {
    return await get(urls.logout);
}

async function createFurniture(data) {
    return await post(urls.catalog, data);
}

async function getAllFurniture() {
    return await get(urls.catalog);
}

async function getDetails(id) {
    return await get(`${urls.catalog}/${id}`);
}

async function updateFurniture(id, data) {
    return await put(`${urls.catalog}/${id}`, data);
}

async function deleteFurniture(id) {
    return await del(`${urls.catalog}/${id}`);
}

async function userFurniture(userId) {
    return await get(`${urls.catalog}?where=_ownerId%3D%22${userId}%22`);
}

export {
    register,
    login,
    logout,
    createFurniture,
    getAllFurniture,
    getDetails,
    updateFurniture,
    deleteFurniture,
    userFurniture
}