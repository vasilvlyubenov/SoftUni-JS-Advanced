import { html } from "../node_modules/lit-html/lit-html.js"
import { userLogin } from "../src/data/auth.js";
import { formHandler } from "../src/util.js";

const loginTemplate = (onLogin) => html`
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onLogin}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input type="password" name="password" id="password" placeholder="password" />
      <button type="submit">login</button>
      <p class="message">Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

let context;

export function loginPage(ctx) {
  ctx.render(loginTemplate(formHandler(onLogin)));
  context = ctx;
}

async function onLogin({email, password}, form) {

  if (email === '' || password === '') {
    return alert('All fields must be filled!');
  }

  await userLogin(email, password);
  form.reset();
  context.page.redirect('/dashboard');
}