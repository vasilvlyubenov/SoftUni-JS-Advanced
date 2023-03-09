import { getDataInfo, delInfo } from "../src/data/data.js";

const details = document.getElementById('details');
const container = details.querySelector('#cont');
let view = null;

function detailsView(context, id) {
    document.getElementById('view-container').replaceChildren(details);
    view = context;
    showDetails(id);
}

async function showDetails(id) {
    container.replaceChildren();

    const userId = localStorage.getItem('id');
    const info = await getDataInfo(id);
    const owner = info._ownerId;
    const title = info.title;
    const imgUrl = info.img;
    const description = info.description;
    const img = document.createElement('img');
    img.className = 'det-img';
    img.src = imgUrl;

    const div = document.createElement('div');
    div.className = 'desc';

    const h2 = document.createElement('h2');
    h2.className = 'display-5';
    h2.textContent = title;

    const headerP = document.createElement('p');
    headerP.className = 'infoType';
    headerP.textContent = 'Description:';

    const descP = document.createElement('p');
    descP.className = 'idea-description';
    descP.textContent = description;

    div.appendChild(h2);
    div.appendChild(headerP);
    div.appendChild(descP);

    container.appendChild(img);
    container.appendChild(div);

    if (userId === owner) {
        const linkDiv = document.createElement('div');
        linkDiv.className = 'text-center';

        const a = document.createElement('a');
        a.className = 'btn detb';
        a.addEventListener('click', () => {deleteInfo(id)});
        a.textContent = 'Delete';

        linkDiv.appendChild(a);
        container.appendChild(linkDiv);
    }
}

async function deleteInfo(id) {
    await delInfo(id);
    view.showView('dashboard-view');
}

export {
    detailsView
}