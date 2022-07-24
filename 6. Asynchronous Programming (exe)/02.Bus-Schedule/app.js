async function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let busStop = {
        next: 'Depot'
    }

    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
        let res = await fetch(url);
        let data = await res.json();
        departBtn.disabled = true;

        busStop = JSON.parse(JSON.stringify(data));
        infoElement.textContent = `Next Stop ${busStop.name}`;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();