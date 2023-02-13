class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.title = '';
    }

    get online () {
		return this._online;
	}

	set online (status) {
		this._online = status;

		if (this.title) {
			this.title.className = this._online ? 'title online' : 'title';
		}
	}

    _create(el, content, className) {
        const tag = document.createElement(el);
        tag.textContent = content;

        if (className !== undefined) {
            tag.className = className;
        }
        
        return tag;
    }

    render(id) {
        const main = document.getElementById(id);
        const article = document.createElement('article');
        this.title = document.createElement('div');
        this.title.className = this.online ? 'title online' : 'title';
        this.title.textContent = `${this.firstName} ${this.lastName}`;

        const button = this._create('button', '&#8505;');
        button.addEventListener('click', reveal);
        this.title.appendChild(button);

        const infoDiv = this._create('div', '', 'info');
        infoDiv.style.display = 'none';
        
        const spanPhone = this._create('span', `&phone; ${this.phone}`);
        const spanEmail = this._create('span', `&#9993; ${this.email}`);
        
        infoDiv.appendChild(spanPhone);
        infoDiv.appendChild(spanEmail);
        article.appendChild(this.title);
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