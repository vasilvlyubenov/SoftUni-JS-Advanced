const host = 'http://localhost:3030';

async function request(method, url, data) {
    try {
        const token = localStorage.getItem('accessToken');
        
        const options = {
            method,
            headers: {}
        };

        if (token) {
            options.headers['X-Authorization'] = token;
        }

        if (data) {
            options.headers['content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        const response = await fetch(host + url, options);

        let result;

        if (response.status !== 204) {
            result = await response.json();
        }

        if (!response.ok) {
            if (response.status === 403) {
                localStorage.removeItem('email');
                localStorage.removeItem('id');
                localStorage.removeItem('accessToken');
            }
            const err = result;
            throw err;
        }

        return result;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const del = request.bind(null, 'delete');