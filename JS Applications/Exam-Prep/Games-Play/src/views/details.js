import { html } from "../../node_modules/lit-html/lit-html.js";
import { addComment, deleteGame, gameDetails, getComments } from "../data/data.js";
import { formHandler, getUserTokens } from "../util.js";


const detailsTemplate = (userId, data, onDelete, comments, onComment) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src="${data.imageUrl}" />
                    <h1>${data.title}</h1>
                    <span class="levels">MaxLevel: ${data.maxLevel}</span>
                    <p class="type">${data.category}</p>
                </div>
        
                <p class="text">
                    ${data.summary}
                </p>
        
                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments ? comments : html`<p class="no-comment">No comments.</p>`}

                </div>
        
                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${userId === data._ownerId ? html`<div class="buttons">
                    <a href="/edit/${data._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>` : null}
            </div>
        
            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${ userId && userId !== data._ownerId ? html`<article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <p id="error"></p>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>` : null}
        
        </section>`;


const commentTemplate = (comment) => html`
<ul>
    <!-- list all comments for current game (If any) -->
    ${comment.map(c => html`<li class="comment">
        <p>Content: ${c.comment}</p>
    </li>`)}
</ul>`;


export async function detailsPage(ctx) {
    const user = getUserTokens();
    const userId = user ? user._id : undefined;
    const id = ctx.params.id;
    const itemData = await gameDetails(id);
    const comments = await gameComments(id);
    const commentsResult = comments.length > 0 ? commentTemplate(comments) : undefined;

    ctx.renderPage(detailsTemplate(userId, itemData, onDelete, commentsResult, formHandler(onComment)));

    async function onDelete() {
        await deleteGame(id);
        ctx.page.redirect('/');
    }
    
    async function gameComments(gameId) {
        return await getComments(gameId);
    }

    async function onComment(data, form) {

        if (data.comment === '') {
            form.querySelector('#error').textContent = 'All fields are required!';
            return setTimeout(() => {form.querySelector('#error').textContent = ''}, 3000);
        }

        await addComment({gameId: id, comment: data.comment});
        form.reset();
        ctx.page.redirect(`/details/${id}`);

    }

}



