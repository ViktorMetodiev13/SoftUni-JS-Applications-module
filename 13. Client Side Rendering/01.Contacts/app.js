import { contacts } from './contacts.js';
import { html, render } from 'https://unpkg.com/lit-html?module';


let template = (name, id, phoneNumber, email) => html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
    <div class="info">
        <h2>Name: ${name}</h2>
        <button @click=${showDetails}>Details</button>
        <div class="details" id=${id} style="display: none;">
        <p>Phone number: ${phoneNumber}</p>
        <p>Email: ${email}</p>
        </div>
    </div>
</div>`;

let detailsTemplate = (id, phoneNumber, email) => html`
<div class="details" id=${id} style="display: none;">
    <p>Phone number: ${phoneNumber}</p>
    <p>Email: ${email}</p>
</div>`


start();

function start() {
    let contactsDiv = document.querySelector('#contacts');

    const templateResult = Object.values(contacts)
        .map(c => template(c.name, c.id, c.phoneNumber, c.email));
    render(templateResult, contactsDiv);
}

function showDetails(event) {
    event.preventDefault();

    
}
