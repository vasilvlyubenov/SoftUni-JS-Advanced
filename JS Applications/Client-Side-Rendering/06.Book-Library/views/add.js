import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js';
import { addData } from "../src/data.js";
import { populate } from './table.js';


const addFormTemplate = () => html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

   export function addForm() {
    render(addFormTemplate(), document.querySelector('#form-container'));
    document.getElementById('add-form').addEventListener('submit', postData);
   }

   async function postData(event) {
    
    event.preventDefault();

    const input = new FormData(event.target);
    const data = Object.fromEntries(input.entries());

    if (data.title === '' || data.author === '') {
        return alert('All fields must be filled!');
    }
    
    await addData(data);
    document.getElementById('add-form').reset();
    populate();

   }