function navView() {
    if (sessionStorage.getItem('accessToken')) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('.email span').textContent = sessionStorage.getItem('email');
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
        document.querySelector('.email span').textContent = 'guest';
    }
}

function createInput(className, value, isAuthor) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = className;
    input.value = value;
    input.disabled = isAuthor;

    return input;
}

function createLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;

    return label;
}

export {
    navView,
    createInput,
    createLabel
}