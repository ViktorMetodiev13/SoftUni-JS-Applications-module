import { getAllShoes } from "../api/shoes.js";
import { render, html } from "../lib.js";
//import {  } from "../../images";

const catalogTemplate = (shoes) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length == 0 ? html`<h2>There are no items added yet.</h2>`
        : shoes.map(shoeCard)}
</section>`;

const shoeCard = (shoe) => html`
<li class="card">
    <img src=".${shoe.imageUrl}" alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="">Details</a>
</li>`;

export async function catalogView() {
    const shoes = await getAllShoes();

    const main = document.querySelector('main');

    const templateResult = catalogTemplate(shoes);
    
    render(templateResult, main);
}