import { html } from "../../node_modules/lit-html/lit-html.js";
import { editGame, gameDetails } from "../data/data.js";
import { formHandler } from "../util.js";


const editTemplate = (itemData, onEdit) => html`
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${onEdit}>
                <p id="error"></p>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value="${itemData.title}">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value="${itemData.category}">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${itemData.maxLevel}">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value="${itemData.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value="${itemData.summary}"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>`;


export async function editPage(ctx) {
    const id = ctx.params.id;
    const itemData = await gameDetails(id);

    ctx.renderPage(editTemplate(itemData, formHandler(onEdit)));

    async function onEdit(data, form) {
        const isEmpty = Object.values(data).some(d => d === '');

        if (isEmpty) {
            form.querySelector('#error').textContent = 'All fields are required!';
            return setTimeout(() => {form.querySelector('#error').textContent = ''}, 3000);
        }

        await editGame(id, data);
        ctx.page.redirect(`/details/${id}`);
    }
}