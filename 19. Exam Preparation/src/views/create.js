import { html, render, page } from "../lib.js";
import { updateNav } from "../app.js";
import { createMeme } from "../api/memes.js";


const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export function createView() {
    const main = document.querySelector('main');

    const templateResult = createTemplate(onSubmit);

    render(templateResult, main);
    
    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const meme = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if (meme.title = '' || meme.description == '' || meme.imageUrl == '') {
            return alert('All fields are required!');
        }

        await createMeme(meme);
        event.target.reset();
        page.redirect('/memes');
    }
}