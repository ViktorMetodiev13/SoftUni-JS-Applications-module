async function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let inputField = document.getElementById('stopId');
    let ulElement = document.getElementById('buses');
    let divElement = document.getElementById('stopName');

    try {
        const res = await fetch(`${baseUrl}${inputField.value}`);
        console.log(res.status);
        
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
        console.log(`Error`);
    }

    let test = await fetch(`http://localhost:3030/jsonstore/bus/businfo/`);
}