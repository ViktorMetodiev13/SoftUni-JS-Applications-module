function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    document.querySelector('#btnLoad').addEventListener('click', onLoad);
    document.querySelector('#btnCreate').addEventListener('click', onCreate);
    let phonebook = document.querySelector('#phonebook');

    async function onCreate() {

    }

    async function onLoad() {
        try {
            let res = await fetch(baseUrl);
            if (res.ok == false) {
                throw new Error(error.message);
            } 

            let data = await res.json();
            phonebook.replaceChildren();

            Object.values(data).forEach(p => {
                let liElement = document.createElement('li');
                liElement.textContent = `${p.person}: ${p.phone}`;
                let buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';
                liElement.appendChild(buttonDelete);
                phonebook.appendChild(liElement);
            })

        } catch (error) {
            alert(error.message);
        }
        
    }

    async function remove() {

    }
}

attachEvents();