import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { clearUserData, getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page('/', homeView);
page('/memes', catalogView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/profile', () => console.log('profile'));

updateNav();
//Start application
page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

export function updateNav() {
    const userData = getUserData();
    let user = document.querySelector('.user');
    let guest = document.querySelector('.guest');

    if (userData) {
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
        user.style.display = 'block';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = 'block';
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}

