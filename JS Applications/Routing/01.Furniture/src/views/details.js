import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFurniture, getDetails } from "../data/data.js";

const detailsTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=".${data.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${sessionStorage.id !== undefined && sessionStorage.id == data._ownerId
          ? html`
              <div>
                <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                <a @click=${deleteItem} href="javascript:void(0)" class="btn btn-red">Delete</a>
              </div>
            `
          : null}
    </div>
</div>`

let context;

async function showDetails(ctx) {
    const id = ctx.params.id;
    const data = await getDetails(id);
    ctx.render(detailsTemplate(data));
    context = ctx;
}

async function deleteItem() {
    const isConfirmed = confirm('Are you sure you want to delete this item?');

    if (isConfirmed) {
        await deleteFurniture(context.params.id);
        context.page.redirect('/');
    }
}

export {
    showDetails
}