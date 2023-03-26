import { html } from "../../node_modules/lit-html/lit-html.js";
import { userLogin } from "../data/auth.js";
import { formHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <section id="login-page" class="auth">
            <form id="login" @submit=${onLogin}>
                <p id="error"></p>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
        
                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>`;


export function loginPage(ctx) {
    ctx.renderPage(loginTemplate(formHandler(onLogin)));

    async function onLogin(data, form) {
        if (data.email === '' || data.password === '') {
            form.querySelector('#error').textContent = 'All fields must be filled!'
            return setTimeout(() => {form.querySelector('#error').textContent = ''}, 3000);
        }
        
        await userLogin(data);
        form.reset();
        ctx.page.redirect('/');
    }
}