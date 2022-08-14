import * as api from "./api/users.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";


page('/', () => console.log('home'));
page('/memes'), () => console.log('catalog');
page('/memes/:id'), () => console.log('details');
page('/edit/:id'), () => console.log('edit');
page('/login'), () => console.log('login');
page('/register'), () => console.log('register');
page('/create'), () => console.log('create');
page('/profile'), () => console.log('profile');


page.start();