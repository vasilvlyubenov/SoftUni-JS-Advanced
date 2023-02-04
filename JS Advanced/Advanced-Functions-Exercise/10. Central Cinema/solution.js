function solve() {
    const movieName = document.querySelector('#add-new input[placeholder="Name"]');
    const movieHall = document.querySelector('#add-new input[placeholder="Hall"]');
    const ticketPrice = document.querySelector('#add-new input[placeholder="Ticket Price"]');
    const movieList = document.querySelector('#movies ul');
    const archivedMovies = document.querySelector('#archive ul');
    const addButton = document.querySelector('#add-new button');
    const clearBtn = document.querySelector('#archive button');

    addButton.addEventListener('click', add);
    clearBtn.addEventListener('click', clearArchive);

    function add(event) {
        event.preventDefault();

        if (movieName.value.length === 0 || movieHall.value.length === 0 || ticketPrice.value.length === 0) {
            return;
        }

        if (isNaN(ticketPrice.value) || ticketPrice.value.length === 0) {
            return;
        }

        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.textContent = movieName.value;
        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${movieHall.value}`;
        const div = document.createElement('div');
        const priceStrong = document.createElement('strong');
        priceStrong.textContent = Number(ticketPrice.value).toFixed(2);
        const ticketCount = document.createElement('input');
        ticketCount.placeholder = 'Tickets Sold';
        const archButn = document.createElement('button');
        archButn.textContent = 'Archive';
        archButn.addEventListener('click', archive);
        div.appendChild(priceStrong);
        div.appendChild(ticketCount);
        div.appendChild(archButn);
        li.appendChild(spanName);
        li.appendChild(strongHall);
        li.appendChild(div);

        movieList.appendChild(li);
        movieName.value = '';
        movieHall.value = '';
        ticketPrice.value = '';

        function archive() {

            if (isNaN(ticketCount.value) || ticketCount.value.length === 0) {
                return
            }

            strongHall.remove();
            div.remove();
            const profit = Number(ticketCount.value) * Number(priceStrong.textContent);
            const strAmount = document.createElement('strong');
            strAmount.textContent = `Total amount: ${profit.toFixed(2)}`;
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', deleteEl);
            li.appendChild(strAmount);
            li.appendChild(delBtn);
            archivedMovies.appendChild(li);


        }

        function deleteEl() {
            li.remove();
        }

    }

    function clearArchive() {
        const ulChildren = Array.from(archivedMovies.children);

        ulChildren.forEach(child => child.remove());
    }
}