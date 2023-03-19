import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from "../data/data.js";
import { setTokens } from '../data/util.js';
import { toggleNavigation } from './navigation.js';

const loginTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${loginForm}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
`


let context;

function showLogin(ctx) {
    ctx.render(loginTemplate());
    context = ctx;
}

async function loginForm(e) {
    e.preventDefault();

    const formInput = new FormData(e.currentTarget);
    const formData = Object.fromEntries(formInput.entries());

    if (formData.email === '' || formData.password === '') {
        return alert('All fields are required!');
    }
    
    const tokens = await login(formData);
    setTokens(tokens._id, tokens.email, tokens.accessToken);
    toggleNavigation();
    context.page.redirect('/');
}

export {
    showLogin
}