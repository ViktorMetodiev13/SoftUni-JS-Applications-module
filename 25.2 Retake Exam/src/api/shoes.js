import { del, get, post } from "./api.js";


export async function getAllShoes() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}