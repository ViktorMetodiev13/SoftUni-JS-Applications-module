import { del, get, post } from "./api.js";


export async function getAllShoes() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createShoe(shoe) {
    return post('/data/shoes', shoe);
}

export async function getshoeById(id) {
    return get('/data/shoes/' + id);
}