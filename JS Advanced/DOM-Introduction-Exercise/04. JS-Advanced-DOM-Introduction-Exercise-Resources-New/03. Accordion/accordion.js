function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const textToggle = document.querySelector('#extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        textToggle.style.display = 'block';
    } else if (button.textContent === 'Less') {
        button.textContent = 'More';
        textToggle.style.display = 'none';
    }
}