import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteShoe, shoeDetails } from "../data/data.js";
import { getUserTokens } from "../util.js";


const detailsTemplate = (data, userId, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${data.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${data.brand}</span></p>
              <p>
                Model: <span id="details-model">${data.model}</span>
              </p>
              <p>Release date: <span id="details-release">${data.release}</span></p>
              <p>Designer: <span id="details-designer">${data.designer}</span></p>
              <p>Value: <span id="details-value">${data.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->

            ${data._ownerId === userId ? html`<div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
          </div>
        </section>`;


export async function detailsPage(ctx) {
  
  const id = ctx.params.id;
  const data = await shoeDetails(id);
  const user = getUserTokens();
  const userId = user ? user._id : undefined;

  ctx.renderPage(detailsTemplate(data, userId, onDelete));

  async function onDelete() {
    await deleteShoe(id);
    ctx.page.redirect('/dashboard');
  }
}

