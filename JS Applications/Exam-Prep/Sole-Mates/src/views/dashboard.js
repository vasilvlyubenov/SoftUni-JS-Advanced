import { html } from "../../node_modules/lit-html/lit-html.js";
import { getShoes } from "../data/data.js";

const dahsboardTemplate = (data) => html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          ${data.length > 0 ? html`<ul class="card-wrapper">
            ${data.map(listTemplate)}
          </ul>` : 
          html`<h2>There are no items added yet.</h2>`}
        </section>`;


const listTemplate = (item) => html`
            <li class="card">
              <img src="${item.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${item.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${item.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
              <a class="details-btn" href="/details/${item._id}">Details</a>
            </li>`;


export async function dashboardPage(ctx) {
  const data = await getShoes();
  ctx.renderPage(dahsboardTemplate(data));
}