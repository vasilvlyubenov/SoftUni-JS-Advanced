import { html } from "../../node_modules/lit-html/lit-html.js";
import { getGames } from "../data/data.js";

const catalogTemplate = (data) => html`
        <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${data.length > 0 ? data.map(itemTemplate) : html`<h3 class="no-articles">No articles yet</h3>`}

        </section>`;


const itemTemplate = (item) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src="${item.imageUrl}">
                    <h6>${item.category}</h6>
                    <h2>${item.title}</h2>
                    <a href="/details/${item._id}" class="details-button">Details</a>
                </div>
            </div>`;


export async function catalogPage(ctx) {
    const data = await getGames();
    ctx.renderPage(catalogTemplate(data));
}