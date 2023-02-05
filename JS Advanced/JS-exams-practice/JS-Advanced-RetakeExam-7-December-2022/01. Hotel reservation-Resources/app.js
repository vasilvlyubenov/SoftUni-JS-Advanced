window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const nextButton = document.getElementById('next-btn');
    const [reservationInfo, confirmReservation] = document.querySelectorAll('section ul');

    nextButton.addEventListener('click', reservation);

    function reservation(e) {
        e.preventDefault();

        if (firstName.value && lastName.value && dateIn.value && dateOut.value && peopleCount.value) {
            const liInfo = document.createElement('li');
            liInfo.classList.add('reservation-content');
            const infoArticle = document.createElement('article');
            const h3Info = document.createElement('h3');
            h3Info.textContent = `Name: ${firstName.value} ${lastName.value}`;
            const pDateIn = document.createElement('p');
            pDateIn.textContent = `From date: ${dateIn.value}`;
            const pDateOut = document.createElement('p');
            pDateOut.textContent = `To date: ${dateOut.value}`;
            const pPeopleCountInfo = document.createElement('p');
            pPeopleCountInfo.textContent = `For ${peopleCount.value} people`;
            infoArticle.appendChild(h3Info);
            infoArticle.appendChild(pDateIn);
            infoArticle.appendChild(pDateOut);
            infoArticle.appendChild(pPeopleCountInfo);
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', editInfo);
            const continueBtn = document.createElement('button');
            continueBtn.classList.add('continue-btn');
            continueBtn.textContent = 'Continue';
            continueBtn.addEventListener('click', continueToConf);
            liInfo.appendChild(infoArticle);
            liInfo.appendChild(editBtn);
            liInfo.appendChild(continueBtn);
            reservationInfo.appendChild(liInfo);
            
            firstName.value = '';
            lastName.value = '';
            dateIn.value = '';
            dateOut.value = '';
            peopleCount.value = '';
            nextButton.disabled = true;

            function editInfo() {
                const infoArr = h3Info.textContent.split(' ');
                firstName.value = infoArr[1];
                lastName.value = infoArr[2];
                const dateInArr = pDateIn.textContent.split(' ');
                dateIn.value = dateInArr[2];
                const dateOutArr = pDateOut.textContent.split(' ');
                dateOut.value = dateOutArr[2];
                const peopleCountArr = pPeopleCountInfo.textContent.split(' ');
                peopleCount.value = peopleCountArr[1];
                nextButton.disabled = false;
                liInfo.remove();
            }

            function continueToConf() {
                const liConfirm = document.createElement('li');
                const confirmBtn = document.createElement('button');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', reservationResult);
                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', reservationResult);
                liConfirm.appendChild(infoArticle);
                liConfirm.appendChild(confirmBtn);
                liConfirm.appendChild(cancelBtn);
                confirmReservation.appendChild(liConfirm);
                liInfo.remove();

                function reservationResult(e) {
                    const resultHeader = document.getElementById('verification');
                    if(e.target.textContent === 'Confirm') {
                        resultHeader.classList.add('reservation-confirmed');
                        resultHeader.textContent = 'Confirmed.';
                    } else if(e.target.textContent === 'Cancel') {
                        resultHeader.classList.add('reservation-cancelled');
                        resultHeader.textContent = 'Cancelled.';
                    }

                    liConfirm.remove();
                    nextButton.disabled = false;
                }
            }

        }
    }
}