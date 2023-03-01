async function solution() {
    const main = document.getElementById('main');

    const articleNames = await fetch('http://localhost:3030/jsonstore/advanced/articles/list').then(name => name.json());
    
    for (const article of articleNames) {
        const id = article._id;
        const titleName = article.title;

        const content = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`).then(data => data.json());

        const accordionDiv = document.createElement('div');
        accordionDiv.className = 'accordion';
        const headDiv = document.createElement('div');
        headDiv.className = 'head';
        const span = document.createElement('span');
        span.textContent = titleName;
        const button = document.createElement('button');
        button.className = 'button';
        button.setAttribute('id', `${id}`);
        button.textContent = 'More';
        headDiv.appendChild(span);
        headDiv.appendChild(button);
        accordionDiv.appendChild(headDiv);
        const extraDiv = document.createElement('div');
        extraDiv.className = 'extra';
        extraDiv.style.display = 'none';
        const p = document.createElement('p');
        p.textContent = content.content;
        extraDiv.appendChild(p);
        accordionDiv.appendChild(extraDiv);
        main.appendChild(accordionDiv);

        button.addEventListener('click', () => {
            if (extraDiv.style.display === 'none') {
                extraDiv.style.display = 'block';
                button.textContent = 'Less';
            } else {
                extraDiv.style.display = 'none';
                button.textContent = 'More';
            }
        });

    };

}

solution();