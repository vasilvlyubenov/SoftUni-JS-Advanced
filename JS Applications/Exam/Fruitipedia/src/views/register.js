import { html } from "../../node_modules/lit-html/lit-html.js";
import { userRegister } from "../data/auth.js";
import { formHandler } from "../util.js";


const registerTemplate = (onRegister) => html`
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form class="register-form" @submit=${onRegister}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <a href="/login">Login</a></p>
                </form>
            </div>
        </section>`;

export function registerPage(ctx) {
    ctx.renderPage(registerTemplate(formHandler(onRegister)));

    async function onRegister(data, form) {
        if (data.password !== data['re-password']) {
            return alert('Password doesn\'t match!');
        }

        await userRegister({ email: data.email, password: data.password });
        form.reset();
        ctx.page.redirect('/');
    }
}