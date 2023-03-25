import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchShoes } from "../data/data.js";
import { formHandler, getUserTokens } from "../util.js";

const searchTemplate = (onSearch) => html`
        <section id="search">
          <h2>Search by Brand</h2>
        
          <form class="search-wrapper cf" @submit=${onSearch}>
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
          </form>
        
          <h3>Results:</h3>
        
          <div id="search-container">

          </div>
        </section>`


const searchRes = (user, data) => html`
            ${ data.length > 0 ? html`<ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
              ${data.map(i => searchItem(user, i))}
            </ul>` : 
            html`<h2>There are no results found.</h2>`}`;


const searchItem = (user, item) => html`
              <li class="card">
                <img src="${item.imageUrl}" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">${item.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong><span class="model">${item.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                ${user ? html`<a class="details-btn" href="/details/${item._id}">Details</a>` : null}
              </li>`;



export function searchPage(ctx) {

  ctx.renderPage(searchTemplate(formHandler(onSearch)));

  async function onSearch(data, form) {
    const user = getUserTokens();
    const parent = form.parentElement;
    const target = parent.querySelector('#search-container');
    const query = data.search;
    
    if (query === '') {
      return alert('Cannot search empty value!');
    }

    const result = await searchShoes(query);
    form.reset();
    ctx.render(searchRes(user, result), target);
  }
}