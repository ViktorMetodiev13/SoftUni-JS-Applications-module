function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let busStop = {
        next: 'Depot'
    }

    function depart() {
        departBtn.disabled = true;
        infoElement.textContent = busStop.next;
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();