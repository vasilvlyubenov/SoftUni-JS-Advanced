import { html } from "../../node_modules/lit-html/lit-html.js";
import { userRegister } from "../data/auth.js";
import { formHandler } from "../util.js";

const registerTemplate = (onRegister) => html`
        <section id="register-page" class="content auth">
            <form id="register" @submit=${onRegister}>
                <p id="error"></p>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>
        
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">
        
                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">
        
                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">
        
                    <input class="btn submit" type="submit" value="Register">
        
                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>`;


export function registerPage(ctx) {
    ctx.renderPage(registerTemplate(formHandler(onRegister)));

    async function onRegister(data, form) {
        if (data.email === '' || data.password === '') {
            form.querySelector('#error').textContent = 'All fields are required!';
            return setTimeout(() => {form.querySelector('#error').textContent = ''}, 3000);
        }

        if (data.password !== data['confirm-password']) {
            form.querySelector('#error').textContent = 'Password doesn\'t match!';
            return setTimeout(() => {form.querySelector('#error').textContent = ''}, 3000);
        }

        await userRegister({email: data.email, password: data.password});
        form.reset();
        ctx.page.redirect('/');
    }
}