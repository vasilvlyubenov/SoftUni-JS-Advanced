import { html } from "../../node_modules/lit-html/lit-html.js";
import { userFurniture } from "../data/data.js";

const myData = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(item => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${data.img}" />
                <p>${data.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
    `)}
</div>
`


async function showMy(ctx) {
    const data = await userFurniture(sessionStorage.id);
    
    ctx.render(myData(data));
}


export {
    showMy
}