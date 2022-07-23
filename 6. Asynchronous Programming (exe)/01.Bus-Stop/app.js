function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputField = document.getElementById('stopId');
    let listOfBuses = document.getElementById('buses');
    let divElement = document.getElementById('stopName');
    
    fetch(`${baseUrl}/${inputField.value}`)
        .then(res => res.json())
        .then(data => {
            let buses = data.buses;
            let name = data.name;

            divElement.textContent = name;

            console.log(buses);
        })
        // .catch(err => {
        //     divElement.textContent = 'Error';
        // })
}