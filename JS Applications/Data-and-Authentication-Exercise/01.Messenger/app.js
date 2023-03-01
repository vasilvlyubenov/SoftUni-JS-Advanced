function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    document.getElementById('submit').addEventListener('click', addMessages);
    document.getElementById('refresh').addEventListener('click', getMessages);

    async function addMessages() {
        const author = document.querySelector('input[name=author]').value;
        const content = document.querySelector('input[name=content]').value;

        try {
            if (author === '' || content === '') {
                throw new Error('All fields must me filled!');
            }

            const object = {
                author,
                content
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });

            if (!response.ok) {
                throw new Error;
            }

        } catch (error) {
            alert(error.message);
        }


    }

    async function getMessages() {
        const textarea = document.getElementById('messages');
        const result = [];

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error;
            }

            const data = await response.json();

            for (const key in data) {
                const message = data[key];

                result.push(`${message.author}: ${message.content}`);
            };

        } catch (error) {
            textarea.textContent = error.message;
        }

        textarea.textContent = result.join('\n');
    }
}

attachEvents();