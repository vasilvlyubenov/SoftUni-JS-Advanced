function lockedProfile() {
    const main = document.getElementById('main');

    populateUserInfo();

    async function populateUserInfo() {
        const userData = await fetch('http://localhost:3030/jsonstore/advanced/profiles').then(data => data.json());
        let userCount = 1;

        for (const key in userData) {

            const username = userData[key].username;
            const email = userData[key].email;
            const age = userData[key].age;

            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';
            const img = document.createElement('img');
            img.className = 'userIcon';
            img.src = './iconProfile2.png';
            const lockLabel = createLabel('Lock');
            const lockInput = createInputFields('radio', `user${userCount}Locked`, 'lock');
            lockInput.checked = true;
            const unlockLabel = createLabel('Unlock');
            const unlockInput = createInputFields('radio', `user${userCount}Locked`, 'unlock');
            const br = document.createElement('br');
            const hr = document.createElement('hr');
            const usernameLabel = createLabel('Username');
            const usernameInput = createInputFields('text', `user${userCount}Username`, `${username}`);
            usernameInput.disabled = true;
            usernameInput.readOnly = true;
            profileDiv.appendChild(img);
            profileDiv.appendChild(lockLabel);
            profileDiv.appendChild(lockInput);
            profileDiv.appendChild(unlockLabel);
            profileDiv.appendChild(unlockInput);
            profileDiv.appendChild(br);
            profileDiv.appendChild(hr);
            profileDiv.appendChild(usernameLabel);
            profileDiv.appendChild(usernameInput);
            const hiddenDiv = document.createElement('div');
            hiddenDiv.setAttribute('id', `user${userCount}HiddenFields`);
            hiddenDiv.style.display = 'none';
            const emailLabel = createLabel('Email:');
            const emailInput = createInputFields('email', `user${userCount}Email`, `${email}`);
            emailInput.disabled = true;
            emailInput.readOnly = true;
            const ageLabel = createLabel('Age:');
            const ageInput = createInputFields('email', `user${userCount}Age`, age);
            ageInput.disabled = true;
            ageInput.readOnly = true;
            const hr2 = document.createElement('hr');
            hiddenDiv.appendChild(hr2);
            hiddenDiv.appendChild(emailLabel);
            hiddenDiv.appendChild(emailInput);
            hiddenDiv.appendChild(ageLabel);
            hiddenDiv.appendChild(ageInput);
            const button = document.createElement('button');
            button.textContent = 'Show more';
            profileDiv.appendChild(hiddenDiv);
            profileDiv.appendChild(button);
            main.appendChild(profileDiv);
            userCount++;

            button.addEventListener('click', () => {
                if (unlockInput.checked === true) {
                    hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

    }

    function createLabel(labelName) {
        const label = document.createElement('label');
        label.textContent = `${labelName}`;

        return label;
    }

    function createInputFields(type, name, value) {
        const input = document.createElement('input');
        input.setAttribute('type', `${type}`);
        input.setAttribute('name', `${name}`);
        input.setAttribute('value', `${value}`);

        return input;
    }
}