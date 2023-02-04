function validate() {
    const pattern = /[a-z]+@[a-z]+.[a-z]{2,3}/g;
    const input = document.querySelector('body input');

    input.addEventListener('change', () => {
        const match = input.value.match(pattern);

        if(match) {
            input.className = '';
        } else {
            input.className = 'error';
        }
    });
}