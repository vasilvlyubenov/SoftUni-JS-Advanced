import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPet, petDetails } from "../data.js/data.js";
import { formHandler } from "../util.js";


const editTemplate = (data, onEdit) => html`
        <!--Edit Page-->
        <section id="editPage">
            <form class="editForm" @submit=${onEdit}>
                <img src="${data.image}">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value="${data.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value="${data.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value="${data.age}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value="${data.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value="${data.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`;


export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await petDetails(id);
    
    ctx.renderPage(editTemplate(data, formHandler(onEdit)));

    async function onEdit(data, form) {
        await editPet(id, data);
        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}