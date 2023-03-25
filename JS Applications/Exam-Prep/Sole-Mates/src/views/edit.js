import { html } from "../../node_modules/lit-html/lit-html.js";
import { editShoe, shoeDetails } from "../data/data.js";
import { formHandler } from "../util.js";


const editTEmplate = (data, onEdit) => html`
<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form" @submit=${onEdit}>
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${data.brand} />
      <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${data.model} />
      <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${data.imageUrl} />
      <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${data.release} />
      <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${data.designer} />
      <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${data.value} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const data = await shoeDetails(id);
  ctx.renderPage(editTEmplate(data, formHandler(onEdit)));
  console.log(id);
  async function onEdit(data, form) {
    const isEmpty = Object.values(data).some(d => d === '');

    if (isEmpty) {
      return alert('All fields are required!');
    }

    await editShoe(id, data);
    form.reset();
    ctx.page.redirect(`/details/${id}`);
  }
}