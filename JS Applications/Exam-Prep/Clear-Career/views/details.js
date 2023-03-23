import { html } from "../node_modules/lit-html/lit-html.js";
import { addApllication, applications, offerDetails, userApps } from "../src/data/data.js";
import { getUserTokens } from "../src/util.js";


const detailsTemplate = (data, isAuthor, totalApplications, isLiked) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${data.imageUrl}" alt="example1" />
    <p id="details-title">${data.title}</p>
    <p id="details-category">
      Category: <span id="categories">${data.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${data.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${data.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${data.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${totalApplications}</strong></p>

    <div id="action-buttons">
      ${isAuthor ? html`
      <a href="/edit/${data._id}" id="edit-btn">Edit</a>
      <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
      ` : null}
      ${!isLiked && !isAuthor ? html`<a href="javascript:void(0)" id="apply-btn" @click=${(e)=> { apply(e,
        data._id) }}>Apply</a>` : null}
      <!--  -->
    </div>
  </div>
</section>`;

let context;

//TODO check user
export async function detailsPage(ctx) {
  context = ctx;
  const id = ctx.params.id;
  let isAuthor = false;
  let isLiked = false;
  const data = await offerDetails(id);
  const user = getUserTokens();
  const totalApplications = await applications(id);


  if (user) {
    isAuthor = data._ownerId === user._id;

    if (await userApps(id, user._id) > 0) {
      isLiked = true;
    }
  }

  ctx.render(detailsTemplate(data, isAuthor, totalApplications, isLiked));
}


async function onDelete() {
  const choice = confirm('Are you sure you want to delete this offer?');

  if (choice) {
    await context.deleteOffer(context.params.id);
    context.page.redirect('/dashboard');
  }
}

async function apply(e, id) {
  e.preventDefault();
  await addApllication(id);

  context.page.redirect(`/details/${id}`);
}