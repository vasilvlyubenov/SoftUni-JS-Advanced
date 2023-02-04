function solve() {
    const task = document.getElementById('task');
    const text = document.getElementById('description');
    const date = document.getElementById('date');
    const [addSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        if (task.value.trim() === '' || text.value.trim() === '' || date.value.trim() === '') {
            return;
        }
            const newArticle = document.createElement('article');
            const header = document.createElement('h3');
            header.textContent = task.value;
            const descP = document.createElement('p');
            descP.textContent = `Description: ${text.value}`;
            const dateP = document.createElement('p');
            dateP.textContent = `Due Date: ${date.value}`;
            const div = document.createElement('div');
            div.className = 'flex';
            const greenBtn = document.createElement('button');
            greenBtn.className = 'green';
            greenBtn.textContent = 'Start';
            greenBtn.addEventListener('click', moveTask);
            div.appendChild(greenBtn);
            const redBtn = document.createElement('button');
            redBtn.className = 'red';
            redBtn.textContent = 'Delete';
            redBtn.addEventListener('click', removeTask);
            div.appendChild(redBtn);
            newArticle.appendChild(header);
            newArticle.appendChild(descP);
            newArticle.appendChild(dateP);
            newArticle.appendChild(div);

            openSection.lastElementChild.appendChild(newArticle);

            function moveTask() {
                greenBtn.remove();
                const finButn = document.createElement('button');
                finButn.className = 'orange';
                finButn.textContent = 'Finish';
                finButn.addEventListener('click', finish);
                div.appendChild(finButn);
                progressSection.lastElementChild.appendChild(newArticle);
            }

            function removeTask() {
                newArticle.remove();
            }

            function finish() {
                div.remove();
                completeSection.lastElementChild.appendChild(newArticle);
            }
    }
}