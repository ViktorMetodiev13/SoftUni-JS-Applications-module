import { html, render } from "../node_modules/lit-html/lit-html.js";


export const booksTemplate = (booksData) => html`
${booksData.map(b => html`
<tr>
    <td>${b.title}</td>
    <td>${b.author}</td>
    <td>
        <button class="editBtn" @click=${edit}>Edit</button>
        <button class="delBtn" @click=${del}>Edit</button>
    </td>
</tr>
`)}
`

let addform = document.getElementById('add-form');
let editForm = document.getElementById('edit-form');

function edit(e) {
    e.preventDefault();

    console.log(e.target.parentNode.parentNode);

    addform.style.display = 'none';
    editForm.style.display = 'block';
}

function del(e) {

}