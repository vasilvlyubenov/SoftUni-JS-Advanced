import {
    getData,
    postData
} from "./src/data.js";
import {
    html,
    render
} from './node_modules/lit-html/lit-html.js'

const selectMenu = document.getElementById('menu');
const form = document.querySelector('form');
rend();
const template = (obj) => html `<option value="${obj._id}">${obj.text}</option>`;

form.addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();

    const formInput = new FormData(e.target);
    const text = Object.fromEntries(formInput.entries());
    await postData(text);
    rend();
    form.reset()

}

async function rend() {
    const data = await getData();
    const converted = Array.from(Object.values(data));
    
    render(converted.map(template), selectMenu);
}