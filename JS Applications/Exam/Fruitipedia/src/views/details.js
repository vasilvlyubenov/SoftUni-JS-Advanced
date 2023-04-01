import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFruit, fruitDetails } from "../data/data.js";
import { getUserTokens } from "../util.js";


const detailsTemplate = (data, userId, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${data.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${data.nutrition}</p>
              </div>
              ${userId !== undefined && data._ownerId === userId ? html`
                <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn" >Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete} >Delete</a>
              </div>` : null}
            </div>
          </div>
        </section>`;


export async function detailsPage(ctx) {

  const id = ctx.params.id;
  const data = await fruitDetails(id);
  const user = getUserTokens();
  const userId = user ? user._id : undefined;
  
  ctx.renderPage(detailsTemplate(data, userId, onDelete));

  async function onDelete() {
    const desicion = confirm('Are you sure you want to delete this item?');
    if (desicion) {
      await deleteFruit(id);
      ctx.page.redirect('/dashboard');
    }
  }
}

