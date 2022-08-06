import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import { page } from "../node_modules/page/page.mjs";
import { logout } from "./api.js";

let root = document.getElementById('site-content');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav() {
    let userData = getUserData();

    if (userData == true) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
    updateUserNav();
    page.redirect('/');
})

page(decorateContext)
updateUserNav();
page.start()