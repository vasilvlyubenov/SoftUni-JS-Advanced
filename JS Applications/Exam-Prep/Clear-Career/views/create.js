import { html } from "../node_modules/lit-html/lit-html.js";
import { formHandler } from "../src/util.js";
import { setOffer } from "../src/data/data.js";


const createTemplate = (onCreate) => html`
<section id="create">
<div class="form">
    <h2>Create Offer</h2>
    <form class="create-form" @submit=${onCreate}>
        <input type="text" name="title" id="job-title" placeholder="Title"/>
        <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url"/>
        <input type="text" name="category" id="job-category" placeholder="Category"/>
        <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
        <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary"/>
        <button type="submit">post</button>
    </form>
</div>
</section>`;

let context;

export function createPage(ctx) {
    ctx.render(createTemplate(formHandler(onCreate)));
    context = ctx;
}

async function onCreate(data, form) {
    const isFilled = Object.values(data).some(d => d === '');
    
    if (isFilled) {
        return alert('All fields must be filled!');
    }

    await setOffer(data);

    form.reset();
    context.page.redirect('/dashboard');
}
