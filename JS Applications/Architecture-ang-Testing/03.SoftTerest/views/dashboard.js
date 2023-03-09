import {
    getData
} from "../src/data/data.js";
import {
    createIdea
} from "../src/data/util.js";

const dashboard = document.getElementById('dashboard');
const holder = dashboard.querySelector('#dashboard-holder');
const h1 = dashboard.querySelector('h1');
let view = null;

function dashboardView(context) {
    document.getElementById('view-container').replaceChildren(dashboard);
    showIdeas();
    view = context;
}



async function showIdeas() {
    holder.replaceChildren();
    
    const data = await getData();

    if (data.length > 0) {
        data.forEach(element => {
            const idea = createIdea(element.title, element.img, element._id);
            idea.addEventListener('click', redirect);
            holder.appendChild(idea);

        });
    } else {
        holder.appendChild(h1);
    }
}

function redirect(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        view.showView('details', event.target.dataset.id);
    }
}
export {
    dashboardView
}