import { logout } from "./api/users.js";
import { page, render, html } from "./lib.js";
import { getUserData } from "./util.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";


page('/', homeView);
page('/shoes', () => console.log('catalog'));
page('/shoes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/search', () => console.log('search'));
page('/create', () => console.log('create'));
page('/login', loginView);
page('/register', () => console.log('register'));

updateNav();
// Start application
page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

export function updateNav() {
    const userData = getUserData();
    let user = document.querySelector('.user');
    let guest = document.querySelector('.guest');
    let logo = document.getElementById('logo');

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
    page.redirect('/');
}

