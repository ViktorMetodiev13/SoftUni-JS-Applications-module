const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

let table = document.querySelector('table');
let tbodyElement = document.getElementsByTagName('tbody')[0];
let formElement = document.getElementsByTagName('form')[0];

document.getElementById('loadBooks').addEventListener('click', loadBooks);

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
        }
    } catch (error) {
        alert(error.message);
    }
}

async function createBook() {

}

async function updateBook() {

}

async function remove() {

}

