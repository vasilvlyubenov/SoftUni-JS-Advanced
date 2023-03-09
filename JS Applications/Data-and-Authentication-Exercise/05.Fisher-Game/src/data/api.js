const host = 'http://localhost:3030';

async function request(method, url, data) {
    const acctesToken = sessionStorage.getItem('accessToken');

    const options = {
        method,
        headers: {}
    };

    if (acctesToken) {
        options.headers['X-Authorization'] = acctesToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        let result;

        if (response.status !== 204) {
            result = response.json();
        }

        if (!response.ok) {
            if (response.status === 403) {
                sessionStorage.removeItem('accessToken');
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('email');
            }

            const err = result;
            throw err;
        }

        return result;

    } catch (error) {
        throw error.message;
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const update = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export {
    get,
    post,
    update,
    del
}