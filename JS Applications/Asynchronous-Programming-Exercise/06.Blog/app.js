function attachEvents() {
    const btnLoad = document.getElementById('btnLoadPosts');
    const btnView = document.getElementById('btnViewPost');
    const selectMenu = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    const bodyObj = {};

    btnLoad.addEventListener('click', loadPosts);
    btnView.addEventListener('click', loadView);

    async function loadPosts() {
        selectMenu.replaceChildren();
        postComments.replaceChildren();
        const titles = await fetch('http://localhost:3030/jsonstore/blog/posts').then(title => title.json());

        for (const key in titles) {
            const id = titles[key].id;
            const title = titles[key].title;
            const body = titles[key].body;

            const option = document.createElement('option');
            option.value = id;
            option.textContent = title;
            selectMenu.appendChild(option);

            bodyObj[id] = body;

        }
    }

    async function loadView() {
        postComments.replaceChildren();
        const optinValue = document.getElementById('posts');
        const content = await fetch('http://localhost:3030/jsonstore/blog/comments').then(content => content.json());
        const comments = Object.values(content).filter(el => el.postId === optinValue.value);
        postBody.textContent = bodyObj[optinValue.value];
        postTitle.textContent = optinValue.selectedOptions[0].textContent;


        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment.text;
            postComments.appendChild(li);
        });

    }
}

attachEvents();