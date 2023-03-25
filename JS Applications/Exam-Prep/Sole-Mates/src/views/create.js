import { html } from "../../node_modules/lit-html/lit-html.js";
import { setShoe } from "../data/data.js";
import { formHandler } from "../util.js";

const createTemplate = (onCreate) => html`
        <section id="create">
            <div class="form">
                <h2>Add item</h2>
                <form class="create-form" @submit=${onCreate}>
                    <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                    <input type="text" name="model" id="shoe-model" placeholder="Model" />
                    <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                    <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                    <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                    <input type="text" name="value" id="shoe-value" placeholder="Value" />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>`;


export function createPage(ctx) {
    ctx.renderPage(createTemplate(formHandler(onCreate)));

    async function onCreate(data, form) {
        const isEmpty = Object.values(data).some(d => d === '');

        if (isEmpty) {
            return alert('All fields are required!');
        }

        await setShoe(data);
        form.reset();
        ctx.page.redirect('/dashboard');
    }

}