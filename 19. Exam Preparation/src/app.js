import { page, render } from "./lib.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";


page('/', homeView);
page('/memes', loginView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));


page.start();
