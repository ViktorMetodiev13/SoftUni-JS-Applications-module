import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllOffers() {
    return api.get('/data/offers?sortBy=_createdOn%20desc');
}

// offer details
export async function getOfferById(id) {
    return api.get('/data/offers/' + id);
}

// NOT NEEDED
// export async function getMyBooks(userId) {
//     return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

export async function createOffer(offer) {
    return api.post('data/offers', offer);
}

export async function editOffer(id, offer) {
    return api.put('data/offers' + id, offer);
}

export async function deleteOffer(id) {
    return api.del('data/offers' + id);
}

// BONUS
export async function applyOnOffer(offerId) {
    return api.post('/data/likes', {
        offerId
    })
}

//Not Necessary
export async function searchBooks(query) {
    return api.get('data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
}