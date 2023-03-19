import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../data/data.js';

const items = (data) => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${data.img}" />
                            <p>${data.description}</p>
                            <footer>
                                <p>Price: <span>${data.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${data._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`


const dashboard = (data) => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(items)}
        </div>
</div>`;

async function dashboardView(ctx) {
    const data = await getAllFurniture();
    ctx.render(dashboard(data));
}

export {
    dashboardView
}