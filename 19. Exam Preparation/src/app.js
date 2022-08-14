import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page('/', homeView);
page('/memes', catalogView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', loginView);
page('/register', registerView);
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));

updateNav();
//Start application
page.start();

function updateNav() {
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

