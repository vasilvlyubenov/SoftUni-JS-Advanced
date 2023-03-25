import { del, get, post, put } from "./api.js"

const endpoints = {
    shoes: '/data/shoes?sortBy=_createdOn%20desc',
    addShoe: '/data/shoes',
    shoe: '/data/shoes/',
    search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
}

export async function getShoes() {
    return get(endpoints.shoes);
}

export async function setShoe(item) {
    await post(endpoints.addShoe, item);
}

export async function shoeDetails(id) {
    return await get(endpoints.shoe + id);
}

export async function editShoe(id, item) {
    return await put(endpoints.shoe + id, item);
}

export async function deleteShoe(id) {
    return await del(endpoints.shoe + id);
}

export async function searchShoes(query) {
    return await get(endpoints.search(query));
}
