function solve() {
    const spanInfo = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stopId = 'depot';
    let stopName = null;

    async function depart() {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);

        if (response.status !== 200) {
            spanInfo.textContent = 'Error';
            return;
        }
        const stopObj = await response.json();
        stopName = stopObj.name;
        stopId = stopObj.next;
        spanInfo.textContent = `Next stop ${stopName}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        
    }

    function arrive() {
        spanInfo.textContent = `Arrivind at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();