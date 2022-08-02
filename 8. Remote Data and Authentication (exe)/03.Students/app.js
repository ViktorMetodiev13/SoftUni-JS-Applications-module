const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
let table = document.querySelector('#results tbody');
let form = document.querySelector('form');

window.addEventListener('load', loadStudents)
form.addEventListener('submit', createStudent)

async function loadStudents() {
    try {
        const res = await fetch(baseUrl);
        if (res.status != 200) {
            throw new Error(error.message);
        }

        const data = await res.json();

        Object.values(data).forEach(r => {
            let student = createElement('tr',
            createElement('td', r.firstName),
            createElement('td', r.lastName),
            createElement('td', r.facultyNumber),
            createElement('td', r.grade),
            )

            table.appendChild(student);
        })

    } catch (error) {
        alert(error.message);
    }

}

async function createStudent(e) {
    e.preventDefault();

    let dataForm = new FormData(form);
    let infoArr = [...dataForm.values()];

    table.replaceChildren();

    try {
        let res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: infoArr[0],
                lastName: infoArr[1],
                facultyNumber: infoArr[2],
                grade: infoArr[3]
            }) 
        })

        if (res.status != 200) {
            throw new Error('Cant create new record');
        }

        loadStudents()
    } catch (error) {
        alert(error.message);
    }
}

function createElement(type, ...content) {
    let element = document.createElement(type);

    content.forEach(c => {
        if (typeof c === 'number' || typeof c === 'string') {
            c = document.createTextNode(c);
        }
        element.appendChild(c)
    })

    return element;
}
