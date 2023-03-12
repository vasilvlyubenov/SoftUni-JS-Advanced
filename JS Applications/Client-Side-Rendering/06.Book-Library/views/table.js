import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js'
import { deleteData, getData } from '../src/data.js';
import { showEdit } from './edit.js';

const tableTemplate = (id, values) => html `
            <tr>
                <td>${values.author}</td>
                <td>${values.title}</td>
                <td>
                    <button data-id=${id} @click=${() => {showEdit(id, values.author, values.title)}}>Edit</button>
                    <button data-id=${id} @click=${deleteInfo}>Delete</button>
                </td>
            </tr>
`;


export async function populate() {
    const data = Object.entries(await getData());
    render(data.map(el => tableTemplate(el[0], el[1])), document.querySelector('tbody'));
}

async function deleteInfo(e) {
    const id = e.target.dataset.id;
    await deleteData(id);
    populate();
}