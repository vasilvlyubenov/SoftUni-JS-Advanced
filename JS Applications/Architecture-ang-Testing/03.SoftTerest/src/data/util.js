function setTokens(email, id, accessToken) {
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    localStorage.setItem('accessToken', accessToken);
}

function removeTokens() {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('accessToken');
}

function toggleNav() {
    if (localStorage.accessToken) {
        document.getElementById('create-view').parentElement.style.display = '';
        document.getElementById('logout').parentElement.style.display = '';
        document.getElementById('login-view').parentElement.style.display = 'none';
        document.getElementById('register-view').parentElement.style.display = 'none';
    } else {
        document.getElementById('create-view').parentElement.style.display = 'none';
        document.getElementById('logout').parentElement.style.display = 'none';
        document.getElementById('login-view').parentElement.style.display = '';
        document.getElementById('register-view').parentElement.style.display = '';
    }
}

function createIdea(title, imgPath, id) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card overflow-hidden current-card details';
    cardDiv.style.width = '20rem';
    cardDiv.style.width = '18rem';
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');

    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = title;
    bodyDiv.appendChild(p);

    const img = document.createElement('img');
    img.classList.add('card-image');
    img.alt = 'Card image cap';
    img.src = imgPath;

    const a = document.createElement('a');
    a.classList.add('btn');
    a.href ='';
    a.textContent = 'Details';
    a.dataset.id = id;
    
    cardDiv.appendChild(bodyDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(a);

    return cardDiv;
}


export {
    setTokens,
    removeTokens,
    toggleNav,
    createIdea
}