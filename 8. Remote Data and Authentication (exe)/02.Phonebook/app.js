function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    document.querySelector('#btnLoad').addEventListener('click', onLoad);
    document.querySelector('#btnCreate').addEventListener('click', onCreate);
    document.getElementById('phonebook').addEventListener('click', remove)
    let phonebook = document.querySelector('#phonebook');

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
                buttonDelete.setAttribute('id', p._id); 
                liElement.appendChild(buttonDelete);
                phonebook.appendChild(liElement);
            })

        } catch (error) {
            alert(error.message);
        }   
    }

    async function onCreate() {
        let personField = document.querySelector('#person').value;
        let phoneField = document.querySelector('#phone').value;

        try {
            await fetch(baseUrl, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: personField.trim(),
                    phone: phoneField.trim()
                })
            });

        } catch (error) {
            alert(error.message);
        }

        personField.textContent = '';
        phoneField.textContent = '';

        onLoad();
    }

    async function remove(e) {
        let currentId = e.target.id;

        if (e.target.textContent == 'Delete') {
            try {
                await fetch(`${baseUrl}/${currentId}`, {
                    method: 'DELETE'
                });

                onLoad()
            } catch (error) {
                alert(error.message);
            }
        }
    }
}

attachEvents();