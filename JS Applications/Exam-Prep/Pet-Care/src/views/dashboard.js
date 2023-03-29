import { html } from "../../node_modules/lit-html/lit-html.js";
import { getPets } from "../data.js/data.js";


const dashboardTemplate = (data) => html`
        <!--Dashboard-->
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${data.length > 0 ? data.map(d => html`
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${d.image}">
                    </article>
                    <h2 class="name">${d.name}</h2>
                    <h3 class="breed">${d.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${d._id}">Details</a>
                    </div>
                </div>`) : html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`}
            </div>
        </section>`;


export async function dashboardPage(ctx) {
    const data = await getPets();
    ctx.renderPage(dashboardTemplate(data));
}