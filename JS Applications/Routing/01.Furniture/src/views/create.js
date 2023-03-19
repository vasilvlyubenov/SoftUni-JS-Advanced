import {
    html
} from "../../node_modules/lit-html/lit-html.js";
import {
    createFurniture
} from "../data/data.js";

const createForm = () => html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitForm}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`

let context;

async function createView(ctx) {

    ctx.render(createForm());
    context = ctx;
}

async function submitForm(e) {
    e.preventDefault();
    let isFormValid = true;
    const formInput = new FormData(e.currentTarget);
    const formData = Object.fromEntries(formInput.entries());

    const make = document.getElementById('new-make');
    const model = document.getElementById('new-model');
    const year = document.getElementById('new-year');
    const description = document.getElementById('new-description');
    const price = document.getElementById('new-price');
    const img = document.getElementById('new-image');

    formData.make.length >= 4 ? validate(make, true) : validate(make, false);
    formData.model.length >= 4 ? validate(model, true) : validate(model, false);
    Number(formData.year) > 1950 && Number(formData.year) < 2050 ? validate(year, true) : validate(year, false);
    formData.description.length > 10 ? validate(description, true) : validate(description, false);
    Number(formData.price) >= 0 ? validate(price, true) : validate(price, false);
    formData.img !== '' ? validate(img, true) : validate(img, false);

    formData.price = Number(formData.price);
    formData.year = Number(formData.year);

    if (!isFormValid) {
        return alert('Enter correct information!');
    } 
    
    await createFurniture(formData);
    context.page.redirect('/');

    function validate(element, boolean) {
        if (boolean === true) {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
        } else {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            isFormValid = false;
        }
    }
}


export {
    createView
}