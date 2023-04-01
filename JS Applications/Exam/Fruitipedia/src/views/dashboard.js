import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFruits } from "../data/data.js";

const dahsboardTemplate = (data) => html`
                <h2>Fruits</h2>
                ${data.length > 0 ? html`<section id="dashboard">
                  <!-- Display a div with information about every post (if any)-->
                  ${data.map(listTemplate)}
                </section>` : 
                html`<h2>No fruit info yet.</h2>`}`;


const listTemplate = (item) => html`
            <div class="fruit">
              <img src="${item.imageUrl}" alt="example1" />
              <h3 class="title">${item.name}</h3>
              <p class="description">${item.description}</p>
              <a class="details-btn" href="/details/${item._id}">More Info</a>
            </div>`;


export async function dashboardPage(ctx) {
  const data = await getFruits();
  ctx.renderPage(dahsboardTemplate(data));
}