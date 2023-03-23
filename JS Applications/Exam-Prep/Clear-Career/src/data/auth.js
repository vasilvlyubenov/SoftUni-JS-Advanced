import { removeUserTokens, setUserTokens } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function userLogin(email, password) {
    const user = await post(endpoints.login, {email, password});
    setUserTokens(user);
}

export async function userRegister(email, password) {
    const user = await post(endpoints.register, {email, password});
    setUserTokens(user);
}

export async function userLogout() {
    await get(endpoints.logout);
    removeUserTokens();
}