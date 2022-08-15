import { logout } from "./api/users.js";
import { page } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";

import * as api from "./api/api.js";
window.api = api;


page('/', homeView);
page('/shoes', catalogView);
page('/shoes/:id', detailsView);
page('/edit/:id', () => console.log('edit'));
page('/search', () => console.log('search'));
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

updateNav();
// Start application
page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

export function updateNav() {
    const userData = getUserData();
    let user = document.querySelector('.user');
    let guest = document.querySelector('.guest');

    if (userData) {
        let logo = document.getElementById('logo');
        user.style.display = 'block';
        guest.style.display = 'none';
    } else {
        let logo = document.getElementById('logo');
        user.style.display = 'none';
        guest.style.display = 'block';
    }
};

function onLogout() {
    logout();
    updateNav();
    page.redirect('/shoes');
}