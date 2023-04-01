import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchFruits } from "../data/data.js";
import { formHandler } from "../util.js";

const searchTemplate = (onSearch) => html`
<section id="search">
  <div class="form">
    <h2>Search</h2>
      <form class="search-form" @submit="${onSearch}">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  <div class="search-result">

  </div>
</section>`;


const searchRes = (data) => html`
            ${ data.length > 0 ? html`
                ${data.map(searchItem)}` : 
            html`<p class="no-result">No result.</p>`}`;


const searchItem = (item) => html`
              <div class="fruit">
                <img src="${item.imageUrl}" alt="example1" />
                <h3 class="title">${item.name}</h3>
                <p class="description">${item.description}</p>
                <a class="details-btn" href="/details/${item._id}">More Info</a>
              </div>`;



export function searchPage(ctx) {

  ctx.renderPage(searchTemplate(formHandler(onSearch)));

  async function onSearch(data, form) {
    const parent = form.parentElement.parentElement;
    const target = parent.querySelector('.search-result');
    const query = data.search;

    const result = await searchFruits(query);
    form.reset();
    ctx.render(searchRes(result), target);
  }
}