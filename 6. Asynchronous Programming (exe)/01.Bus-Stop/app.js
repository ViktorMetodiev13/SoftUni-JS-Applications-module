async function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputField = document.getElementById('stopId');
    let ulElement = document.getElementById('buses');
    let divElement = document.getElementById('stopName');

    try {
        const res = await fetch(`${baseUrl}/${inputField.value}`);
        const data = await res.json();

        let name = data.name;
        let buses = data.buses;

        divElement.textContent = name;

        for (const bus in buses) {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            ulElement.appendChild(liElement);
        }
    } catch (error) {
        divElement.textContent = `Error`;
    }

}