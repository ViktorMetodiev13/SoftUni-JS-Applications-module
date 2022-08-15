import { getshoeById } from "../api/shoes.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (shoe) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=".${shoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a>
        </div>
    </div>
</section>`;

export async function detailsView(event) {
    const shoe = await getshoeById(id);
    console.log(shoe);
    const main = document.querySelector('main');

    const templateResult = detailsTemplate(shoe);

    render(templateResult, main);
}

