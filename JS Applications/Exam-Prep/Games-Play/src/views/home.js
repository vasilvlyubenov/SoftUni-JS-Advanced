import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecentGames } from "../data/data.js";


const homeTemplate = (data) => html`
        <section id="welcome-world">
        
            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">
        
            <div id="home-page">
                <h1>Latest Games</h1>
        
                <!-- Display div: with information about every game (if any) -->
                ${data.length > 0 ? data.map(gameTemplate) : html`<p class="no-articles">No games yet</p>`}
            </div>
        </section>`;


const gameTemplate = (item) => html`
                <div class="game">
                    <div class="image-wrap">
                        <img src="${item.imageUrl}">
                    </div>
                    <h3>${item.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${item._id}" class="btn details-btn">Details</a>
                    </div>
                </div>`;


export async function homePage(ctx) {
    
    const data = await getRecentGames();
    ctx.renderPage(homeTemplate(data));
}