import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js';
import { updateData } from '../src/data.js';
import { addForm } from './add.js';
import { populate } from './table.js';

const editTemplate = () => html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`;

    export function showEdit(id, author, title) {
        document.querySelector('#add-form').remove();
        render(editTemplate(), document.querySelector('#form-container'));
        document.querySelector('input[name=title]').value = title;
        document.querySelector('input[name=author]').value = author;
        document.getElementById('edit-form').addEventListener('submit', (e) => {editInfo(e, id)});
    }

    async function editInfo(event, targetId) {
        event.preventDefault();
      
        const input = new FormData(event.target);
        const {id, title, author} = Object.fromEntries(input);
        
        await updateData(targetId, {title, author});
        populate();
        addForm();
    }