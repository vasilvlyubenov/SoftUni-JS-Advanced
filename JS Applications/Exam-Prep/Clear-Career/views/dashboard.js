import { html } from "../node_modules/lit-html/lit-html.js"
import { getOffers } from "../src/data/data.js";


const dashboardTemplate = (data) => html`
<section id="dashboard">
  <h2>Job Offers</h2>
  ${data.length > 0 ? data.map(offersTemplate) : html`<h2>No offers yet.</h2>`}
</section>`;

const offersTemplate = (data) => html`
<div class="offer">
  <img src="${data.imageUrl}" alt="example1" />
  <p>
    <strong>Title: </strong><span class="title">${data.title}</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
  <a class="details-btn" href="/details/${data._id}">Details</a>
</div>`;

export async function dashboardPage(ctx) {
  const data = await getOffers();
  ctx.render(dashboardTemplate(data));
}