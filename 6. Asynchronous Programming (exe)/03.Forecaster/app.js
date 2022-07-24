async function attachEvents() {
    let inputElement = document.getElementById('location').value;
    let getButton = document.getElementById('submit');
    let forecast = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster'
    
    let weatherIcons = {
        sunny: '&#x2600',
        partlySunny: '&#x26C5',
        overcast: '&#x2601',
        rain: '&#x2614',
        degress: '&#176'
    }
    
    let code = '';

    let divElementUpcoming = document.createElement('div');
    let divElementCurrent = document.createElement('div');

    
    getButton.addEventListener('click', async (e) => {
        divElementUpcoming.innerHTML = '';
        divElementCurrent.innerHTML = '';
        
        let res = await fetch(`${baseUrl}/${inputElement}`);
        let data = await res.json();
        console.log(data);
    });

    
}

attachEvents();