import {
    html,
    render
} from './node_modules/lit-html/lit-html.js';

import {
    cats
} from './catSeeder.js';

const template = (cats) => html `
    <ul  @click=${toggleStatus}>
        ${cats.map( cat => html `<li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`)}
    </ul>`;


function toggleStatus(e) {
    const target = e.target;

    const targetDiv = target.parentElement.querySelector('.status');
   
    if (target.tagName === 'BUTTON') {
        if (target.textContent === 'Show status code') {
            targetDiv.style.display = 'block';
            target.textContent = 'Hide status code';
        } else {
            targetDiv.style.display = 'none';
            target.textContent = 'Show status code';
    
        }
    }
   
}


render(template(cats), document.getElementById('allCats'));