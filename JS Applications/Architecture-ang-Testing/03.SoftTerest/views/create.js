import {
    createInfo
} from "../src/data/data.js";

const createSection = document.getElementById('create');
const createForm = createSection.querySelector('form');
let view = null;

function createView(context) {
    document.getElementById('view-container').replaceChildren(createSection);
    createForm.reset();
    view = context;
}

createForm.addEventListener('submit', create);

async function create(event) {
    event.preventDefault();

    if (localStorage.getItem('accessToken')) {
        
        const formInput = new FormData(event.target);
        const {
            title,
            description,
            imageURL
        } = Object.fromEntries(formInput.entries());

        if (title.length < 6) {
            return alert("Title shold be at least 6 characters.");
        }

        if (description.length < 10) {
            return alert("Description shold be at least 10 characters.");
        }

        if (imageURL.length < 5) {
            return alert("Image shold be at least 5 characters.");
        }

        await createInfo(title, description, imageURL);
        createForm.reset();

        view.showView('dashboard-view');
    } else {
        return alert('Only logged in user can create!');
    }
}

export {
    createView
}