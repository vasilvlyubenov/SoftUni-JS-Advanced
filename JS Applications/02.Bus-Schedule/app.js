function solve() {
    const spanInfo = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stopName = null;

    async function depart() {
        const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/depot');

        if (response.status !== 200) {
            spanInfo.textContent = 'Error';
            return;
        }

        spanInfo.textContent = 'Next stop Depot';
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        
    }

    function arrive() {
        spanInfo.textContent = 'Arrivind at Depot';
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();