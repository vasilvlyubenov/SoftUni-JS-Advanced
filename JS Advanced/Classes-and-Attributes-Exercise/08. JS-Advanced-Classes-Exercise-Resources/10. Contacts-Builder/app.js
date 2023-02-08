class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get onlineStatus () {
		return this._online;
	}

	set onlineStatus (type) {
		this._online = type;

		if (this.infoDiv) {
			this.infoDiv.className = this._online ? 'title online' : 'title';
		}
	}

    render(id) {
        const main = document.getElementById(id);
        const article = document.createElement('article');
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `${this.firstName} ${this.lastName}`;
        const button = document.createElement('button');
        button.textContent = '&#8505;';
        button.addEventListener('click', reveal);
        title.appendChild(button);
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        const spanPhone = document.createElement('span');
        spanPhone.textContent = `&phone; ${this.phone}`;
        const spanEmail = document.createElement('span');
        spanEmail.textContent = `&#9993; ${this.email}`;
        infoDiv.appendChild(spanPhone);
        infoDiv.appendChild(spanEmail);
        article.appendChild(title);
        article.appendChild(infoDiv);
        main.appendChild(article);

        function reveal() {
            if (infoDiv.style.display === 'none') {
                infoDiv.style.display = 'block';
            } 
            else {
                infoDiv.style.display = 'none';
            }
        }
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));