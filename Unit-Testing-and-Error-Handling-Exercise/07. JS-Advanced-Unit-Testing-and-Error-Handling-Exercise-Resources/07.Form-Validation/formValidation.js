function validate() {
    const checkbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const form = document.querySelector('#registerForm');


    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }

    });

    form.addEventListener('submit', validate)

    function validate(event) {
        event.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPass = document.getElementById('confirm-password');
        const companyName = document.getElementById('companyNumber');
        const validDiv = document.getElementById('valid');
        const userPattern = /^[a-zA-Z0-9]+$/;
        const emailPattern = /.*@.*\..*/;
        const passwordPattern = /^[\w]+$/;
        let nameValidation = false;
        let passwordValidation = false;
        let confPassValidation = false;
        let emailValidation = false;
        let companyNameValidation = false;

        if (username.value.length >= 3 && username.value.length <= 20 && userPattern.test(username.value)) {
            nameValidation = true;
        }
        
        if (password.value === confirmPass.value && password.value.length >= 5 && password.value.length <= 15 && password.value.match(passwordPattern)) {
            passwordValidation = true;
        }
        
        if (password.value === confirmPass.value && confirmPass.value.length >= 5 && confirmPass.value.length <= 15 && confirmPass.value.match(passwordPattern)) {
            confPassValidation = true;
        }

        if (email.value.match(emailPattern)) {
            emailValidation = true;
        }

        if (checkbox.checked) {
            if (companyName.value >= 1000 && companyName.value <= 9999) {
                companyNameValidation = true;
            }
        } else {
            companyNameValidation = true;
        }

        if (nameValidation) {
            username.style.border = 'none';
        } else {
            username.style.borderColor = 'red';
        }

        if (passwordValidation) {
            password.style.border = 'none';
        } else {
            password.style.borderColor = 'red';
        }

        if (confPassValidation) {
            confirmPass.style.border = 'none';
        } else {
            confirmPass.style.borderColor = 'red';
        }

        if (emailValidation) {
            email.style.border = 'none';
        } else {
            email.style.borderColor = 'red';
        }

        if (companyNameValidation) {
            companyName.style.border = 'none';
        } else {
            companyName.style.borderColor = 'red';
        }

        if (nameValidation && passwordValidation && confPassValidation && emailValidation && companyNameValidation) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }
}