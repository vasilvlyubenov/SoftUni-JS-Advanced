import {
    html,
    render
} from './node_modules/lit-html/lit-html.js'

const form = document.querySelector('form');

const template = (town) => html `<ul>${town.map((t) => html`<li>${t}</li>`)}</ul>`;

form.addEventListener('submit', populate);

function populate(event) {
    event.preventDefault();

    const formInput = new FormData(event.target);
    const towns = [...formInput.entries()][0][1].split(', ');
    render(template(towns), document.getElementById('root'));

}