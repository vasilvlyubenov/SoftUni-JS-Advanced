const home = document.getElementById('home');

function homeView() {
    
    document.getElementById('view-container').replaceChildren(home);
}

export {
    homeView
}