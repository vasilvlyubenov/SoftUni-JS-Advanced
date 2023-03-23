import { html } from "../node_modules/lit-html/lit-html.js"
import { editOffer, offerDetails } from "../src/data/data.js";
import { formHandler } from "../src/util.js";

const editTemplate = (data, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Offer</h2>
  <form class="edit-form" @submit=${onEdit}>
    <input type="text" name="title" id="job-title" placeholder="Title" .value=${data.title} />
    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${data.imageUrl} />
    <input type="text" name="category" id="job-category" placeholder="Category" .value=${data.category} />
    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${data.description}></textarea>
    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"cols="50" .value=${data.requirements}></textarea>
    <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${data.salary} />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

let context;

export async function editPage(ctx) {
  const data = await offerDetails(ctx.params.id);
  context = ctx;
  ctx.render(editTemplate(data, formHandler(onEdit)));
}


async function onEdit(data, form) {
  const isFilled = Object.values(data).some(d => d === '');
    
  if (isFilled) {
      return alert('All fields must be filled!');
  }
  
  await editOffer(context.params.id, data)
  form.reset();
  context.page.redirect(`/details/${context.params.id}`);
}