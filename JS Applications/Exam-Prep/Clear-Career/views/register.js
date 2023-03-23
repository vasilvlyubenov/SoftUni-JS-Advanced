import { html } from "../node_modules/lit-html/lit-html.js";
import { userRegister } from "../src/data/auth.js";
import { formHandler } from "../src/util.js";

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

let context;

export function registerPage(ctx) {
    ctx.render(registerTemplate(formHandler(onRegister)));
    context = ctx;
}

async function onRegister(data, form) {
    
    if (data.email === '' || data.password === '') {
        return alert('All fields must be filled!');
    }

    if (data.password !== data['re-password']) {
        return alert('Password doensn\t match!');
    }

    await userRegister(data.email, data.password);
    form.reset();
    context.page.redirect('/dashboard');
}