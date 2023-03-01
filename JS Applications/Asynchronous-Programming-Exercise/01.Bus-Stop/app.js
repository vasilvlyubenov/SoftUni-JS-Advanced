function getInfo() {
    const busId = document.getElementById('stopId').value;
    const nameDiv = document.getElementById('stopName');
    const ul = document.getElementById('buses');
    ul.replaceChildren();


    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error;
            }
            return response.json();
        })
        .then(data => {

            nameDiv.textContent = data.name;

            const objBuses = data.buses;


            for (const key in objBuses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${objBuses[key]} minutes`;
                ul.appendChild(li);
            }
        })
        .catch(
            nameDiv.textContent = 'Error'
        );
}