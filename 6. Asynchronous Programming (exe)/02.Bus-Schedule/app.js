function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let busStop = {
        next: 'Depot'
    }

    let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
    function depart() {
        departBtn.disabled = true;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                busStop = JSON.parse(JSON.stringify(data));
                infoElement.textContent = `Next stop ${busStop.name}`;
            })
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${busStop.next}`;

        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();