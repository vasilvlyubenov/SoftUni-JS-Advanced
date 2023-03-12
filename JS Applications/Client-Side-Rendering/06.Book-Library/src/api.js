const targetURL = 'http://localhost:3030/jsonstore/collections/books';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (!url) {
        url = '';
    }

    try {
        const response = await fetch(targetURL + url, options);

        if (!response.ok) {
            throw await response.json();
        }

        return response.json();
    } catch (error) {
        throw alert(error.message);
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const update = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    update,
    del
}