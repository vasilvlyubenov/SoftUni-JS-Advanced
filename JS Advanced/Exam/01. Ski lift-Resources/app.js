window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const numberOfDays = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', submitInfo);

    function submitInfo(e) {
        e.preventDefault();

        if (!firstName.value || !lastName.value || !peopleCount.value || !fromDate.value || !numberOfDays.value) {
            return;
        }
        
        const nameFirst = firstName.value;
        const nameLast = lastName.value;
        const peopCount = peopleCount.value;
        const dateFrom = fromDate.value;
        const daysCount = numberOfDays.value;

        const ulList = document.getElementsByClassName('ticket-info-list')[0];
        const liTicket = createElement('li', null, 'ticket');
        const article = createElement('article');
        const h3 = createElement('h3', `Name: ${nameFirst} ${nameLast}`);
        const pDate = createElement('p', `From date: ${dateFrom}`);
        const pDays = createElement('p', `For ${daysCount} days`);
        const pCount = createElement('p', `For ${peopCount} people`);
        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pCount);
        liTicket.appendChild(article);
        const editBtn = createElement('button', 'Edit', 'edit-btn');
        const continueBtn = createElement('button', 'Continue', 'continue-btn');
        editBtn.addEventListener('click', editInfo);
        continueBtn.addEventListener('click', continueInfo);
        liTicket.appendChild(editBtn);
        liTicket.appendChild(continueBtn);
        ulList.appendChild(liTicket);
        clearInput();
        nextBtn.disabled = true;

        function editInfo() {
            firstName.value = nameFirst;
            lastName.value = nameLast;
            peopleCount.value = peopCount;
            fromDate.value = dateFrom;
            numberOfDays.value = daysCount;
            nextBtn.disabled = false;
            liTicket.remove();
        }

        function continueInfo() {
            const confirmedTicket = document.getElementsByClassName('confirm-ticket')[0];
            const confirmBtn = createElement('button', 'Confirm', 'confirm-btn');
            const cancelBtn = createElement('button', 'Cancel', 'cancel-btn');
            confirmBtn.addEventListener('click', confirmInfo);
            cancelBtn.addEventListener('click', cancelInfo);
            editBtn.remove();
            continueBtn.remove();
            liTicket.appendChild(confirmBtn);
            liTicket.appendChild(cancelBtn);
            confirmedTicket.appendChild(liTicket);

            function confirmInfo() {
                const body = document.getElementById('body');
                const h1 = createElement('h1', 'Thank you, have a nice day!');
                h1.setAttribute('id', 'thank-you');
                const backBtn = createElement('button', 'Back');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.addEventListener('click', () => {
                    location.reload();
                });

                document.getElementById('main').remove();
                body.appendChild(h1);
                body.appendChild(backBtn);
            }

            function cancelInfo() {
                liTicket.remove();
                nextBtn.disabled = false;
            }
        }
    }

    function createElement(tag, content, className, idName) {
        const el = document.createElement(tag);

        if (content) {
            el.textContent = content;
        }

        if (className) {
            el.className = className;
        }

        return el;
    }

    function clearInput() {
        firstName.value = '';
        lastName.value = '';
        peopleCount.value = '';
        fromDate.value = '';
        numberOfDays.value = '';
    }
}