import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFruit, fruitDetails } from "../data/data.js";
import { formHandler } from "../util.js";


const editTEmplate = (data, onEdit) => html`
        <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input type="text" name="name" id="name" placeholder="Fruit Name" .value="${data.name}" />
              <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value="${data.imageUrl}" />
              <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50" .value="${data.description}" ></textarea>
              <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50" .value="${data.nutrition}" ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const data = await fruitDetails(id);
  ctx.renderPage(editTEmplate(data, formHandler(onEdit)));

    async function onEdit(data, form) {
    await editFruit(id, data);
    form.reset();
    ctx.page.redirect(`/details/${id}`);
  }
}