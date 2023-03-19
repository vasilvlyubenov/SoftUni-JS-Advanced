import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from "../data/data.js";
import { setTokens } from '../data/util.js';
import { toggleNavigation } from './navigation.js';


const registerTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${registerUser}>
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
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
`

let context;

function registerView(ctx) {
    ctx.render(registerTemplate());
    context = ctx;
}

async function registerUser(e) {
    e.preventDefault();

    const input = new FormData(e.currentTarget);
    const data = Object.fromEntries(input.entries());

   if (data.email === '' || data.password === '') {
    return alert('All fields must be filled!');
   }

   if (data.password !== data.rePass) {
    return alert('Password doesn\'t match!');
   }
   
   const res = await register({email: data.email, password: data.password});
   setTokens(res._id, res.email, res.accessToken);
   toggleNavigation();
   context.page.redirect('/');
}


export {
    registerView
}
