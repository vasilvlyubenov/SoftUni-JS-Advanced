const userData = 'userData';

export function getUserTokens() {
    return JSON.parse(localStorage.getItem(userData));

}

export function setUserTokens(data) {
    localStorage.setItem(userData, JSON.stringify(data));
}

export function removeUserTokens() {
    localStorage.removeItem(userData);
}

export function formHandler(callback) {
    return function(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const isEmpty = Object.values(data).some(d => d === '');

        if (isEmpty) {
            return alert('All fields are required!');
        }
    
        callback(data, form);
    }
}