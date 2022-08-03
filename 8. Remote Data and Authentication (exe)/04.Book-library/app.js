const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

let table = document.querySelector('table');
let tbodyElement = document.getElementsByTagName('tbody')[0];
let formElement = document.getElementsByTagName('form')[0];

document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.getElementsByTagName('button')[5].addEventListener('click', createBook);

async function loadBooks() {
    try {
        const res = await fetch(baseUrl);
        if (res.status != 200) {
            throw new Error(error.message);
        }

        const data = await res.json();
        let entries = Object.entries(data);
        console.log(Object.entries(data));
        tbodyElement.innerHTML = '';

        for (const [key, {author, title}] of entries) {
            let trElement = document.createElement('tr');

            let titleElement = document.createElement('td');
            titleElement.textContent = title;
            let authorElement = document.createElement('td');
            authorElement.textContent = author;

            trElement.appendChild(titleElement);
            trElement.appendChild(authorElement);

            let deleteAndEditTD = document.createElement('td');
            let deleteBtn = document.createElement('button');
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', remove);
            editBtn.addEventListener('click', edit)
            deleteAndEditTD.appendChild(editBtn);
            deleteAndEditTD.appendChild(deleteBtn);

            trElement.appendChild(deleteAndEditTD);

            tbodyElement.appendChild(trElement);

            function remove(e) {
                e.preventDefault();

                fetch(`${baseUrl}/${key}`, {
                    method: 'DELETE'
                })

                trElement.remove()
            }

            //DOESN'T WORK NEEDS IMPROVEMENT
            async function edit(e) {
                e.preventDefault();

                let res = await fetch(`${baseUrl}/${key}`);
                let data = await res.json();

                let titleField = document.querySelector('[name="title"]');
                let authorField = document.querySelector('[name="author"]');

                titleField.value = data.title;
                authorField.value = data.author;

                fetch(`${baseUrl}/${key}`, {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: titleField.value,
                        author: authorField.value,
                    })
                })

                fetch(`${baseUrl}/${key}`, {
                    method: 'DELETE'
                })

                loadBooks()
            }

        }
    } catch (error) {
        alert(error.message);
    }
}

async function createBook(e) {
    e.preventDefault();

    let dataForm = new FormData(formElement);
    let infoArr = [...dataForm.values()];

    try {
        let res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: infoArr[0],
                author: infoArr[1]
            })
        })

        if (res.status != 200) {
            throw new Error('Error occurred!');
        }

        loadBooks();
    } catch (error) {
        alert('Error in the new record');
    }
}



