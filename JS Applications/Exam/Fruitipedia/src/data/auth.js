import { removeUserTokens, setUserTokens } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function userLogin(data) {
    const user = await post(endpoints.login, data);
    setUserTokens(user);
}

export async function userRegister(data) {
    const user = await post(endpoints.register, data);
    setUserTokens(user);
}

export async function userLogout() {
    await get(endpoints.logout);
    removeUserTokens();
}