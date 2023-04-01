import { getUserTokens, removeUserTokens } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const user = getUserTokens();

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        let res;

        if (response.status !== 204) {
            res = await response.json();
        }

        if (!response.ok) {
            if (response.status === 403) {
                removeUserTokens();
            }
            const err = res;
            throw err;
        }

        return res;
    } catch (error) {
        throw alert(error.message);
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');