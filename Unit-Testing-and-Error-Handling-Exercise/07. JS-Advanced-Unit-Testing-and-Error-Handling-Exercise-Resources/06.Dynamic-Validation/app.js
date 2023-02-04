function validate() {
    const pattern = /[a-z]+@[a-z]+.[a-z]{2,4}/g;
    const input = document.getElementById('email');

    input.addEventListener('change', () => {
        if(!input.value.match(pattern)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
}