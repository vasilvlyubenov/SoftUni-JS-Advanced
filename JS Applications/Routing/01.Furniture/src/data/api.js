const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(`${host}${url}`, options);

        let result;

        if (response.status !== 204) {
            result = await response.json();
        }

        if (!response.ok) {
            if (request.status === 403) {
                localStorage.removeItem('id');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('email');
            }

            const err = result;
            throw err;
        }

        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
}
