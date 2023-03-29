import { html } from "../../node_modules/lit-html/lit-html.js";
import { userLogin } from "../data.js/auth.js";
import { formHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <!--Welcome Page-->
        
        <!--Login Page-->
        <section id="loginPage">
            <form class="loginForm" @submit=${onLogin}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>
        
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
        
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>
        
                <button class="btn" type="submit">Login</button>
        
                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>`;


export function loginPage(ctx) {
    ctx.renderPage(loginTemplate(formHandler(onLogin)));

    async function onLogin(data, form) {

        try {
            await userLogin(data);
            form.reset();
            ctx.page.redirect('/');
        } catch (error) {
            throw alert(error.message);
        }

    }
}