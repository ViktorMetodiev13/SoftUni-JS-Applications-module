import { deleteMeme, getMemeById } from "../api/memes.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : ''}

        </div>
    </div>
</section>`;

export async function detailsView(event) {
    const id = event.params.id.split('$').join('');
    const meme = await getMemeById(id);
    const userData = getUserData();
    const isOwner = userData?.id == meme._ownerId;

    const main = document.querySelector('main');

    const templateResult = detailsTemplate(meme, isOwner, onDelete);

    render(templateResult, main);

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this meme?');
        console.log(id);
        if (choice == true) {
            await deleteMeme(id);
            page.redirect('/memes');
        }
    }
}