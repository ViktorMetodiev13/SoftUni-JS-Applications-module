function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputField = document.getElementById('stopId');
    let ulElement = document.getElementById('buses');
    let divElement = document.getElementById('stopName');
    
    fetch(`${baseUrl}/${inputField.value}`)
        .then(res => res.json())
        .then(data => {
            let buses = data.buses;
            let name = data.name;
            
            divElement.textContent = name;
            ulElement.innerHTML = '';
            Object.keys(buses).forEach(bus => {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                ulElement.appendChild(li);
            })
            
        })
        // .catch(err => {
        //     divElement.textContent = 'Error';
        // })
}