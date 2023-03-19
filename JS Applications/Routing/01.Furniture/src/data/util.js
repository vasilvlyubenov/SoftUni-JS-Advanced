function setTokens(id, email, accessToken) {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('accessToken', accessToken);
}

function removeTokens() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
}

export {
    setTokens,
    removeTokens,
}