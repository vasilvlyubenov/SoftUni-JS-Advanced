import { render } from "../../node_modules/lit-html/lit-html.js";



function showView(ctx, next) {
    const container = document.querySelector('.container');
    ctx.render = (html) => render(html, container);
    next();
}

export {
    showView
}