const URL = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function request(method, text) {
    const options = {
        method,
        headers: {}
    }
    
    if (text) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(text);
    }

    try {
        const response = await fetch(URL, options);

        if (!response.ok) {
            throw await response.json();
        }

        return response.json();
    } catch (error) {
        throw error.message;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');

export {
    get,
    post
}