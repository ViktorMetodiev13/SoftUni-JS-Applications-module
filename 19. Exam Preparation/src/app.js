import { page, render } from "./lib.js";
import { catalogView } from "./views/catalog.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";


page('/', homeView);
page('/memes', catalogView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', loginView);
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));


page.start();
