import { html } from "../../node_modules/lit-html/lit-html.js";
import { addDonation, deletePet, getDonations, petDetails, userDonationCheck } from "../data.js/data.js";
import { getUserTokens } from "../util.js";


const detailsTemplate = (userId, data, donations, isDonated, onDelete, onDonate) => html`
        <!--Details Page-->
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${data.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age}</h4>
                        <h4>Weight: ${data.weight}</h4>
                        <h4 class="donation">Donation: ${donations}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->

                    ${userId ? html`<div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->

                        ${userId === data._ownerId ? html`<a href="/edit/${data._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>` : null}
                        <!--(Bonus Part) Only for no creator and user-->
                        ${(userId !== data._ownerId) && userId && isDonated === 0 ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>` : null}
                    </div>` : null}
                </div>
            </div>
        </section>`;


export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const user = getUserTokens();
    const userId = user ? user._id : null;
    const donations = await getDonations(petId) * 100;
    console.log(donations);
    const isDonated = await userDonationCheck(petId, userId)
    
    const data = await petDetails(petId);

    ctx.renderPage(detailsTemplate(userId, data, donations, isDonated, onDelete, onDonate));

    async function onDelete() {
        await deletePet(petId);
        ctx.page.redirect('/');
    }

    async function onDonate() {
        await addDonation({petId});
        ctx.page.redirect(`/details/${petId}`);
    }

}