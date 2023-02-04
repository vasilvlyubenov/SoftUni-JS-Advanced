function encodeAndDecodeMessages() {
    const main = document.querySelector('#main');

    main.addEventListener('click', onClick);

    function onClick(event) {
        const button = event.target;
        const textarea = main.querySelectorAll('textarea');
        const input = textarea[0];
        const output = textarea[1];

        if (button.textContent === 'Encode and send it') {
            let decoded = '';
            for (const char of input.value) {
                decoded += String.fromCharCode(char.charCodeAt() + 1);
            }
            output.value = decoded;
            input.value = '';

        } else if (button.textContent === 'Decode and read it') {
            let encoded = '';
            for (const el of output.value) {
                encoded += String.fromCharCode(el.charCodeAt() - 1);
            }
            output.value = encoded;
        }
    }
}