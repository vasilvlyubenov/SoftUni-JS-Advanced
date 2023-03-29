import { render } from "../../node_modules/lit-html/lit-html.js";
import { getUserTokens } from "../util.js";
import { layoutTemplate } from "../views/layout.js";



const root = document.getElementById('container'); 

export function decorateContext(ctx, next) {

    ctx.render = render;
    ctx.renderPage = renderLayout;

    next();
}

function renderLayout(content) {
    const userData = getUserTokens();
    render(layoutTemplate(userData, content), root);
}