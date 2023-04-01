import { del, get, post, put } from "./api.js"

const endpoints = {
    fruits: '/data/fruits?sortBy=_createdOn%20desc',
    addFruit: '/data/fruits',
    fruit: '/data/fruits/',
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
}

export async function getFruits() {
    return get(endpoints.fruits);
}

export async function setFruit(item) {
    await post(endpoints.addFruit, item);
}

export async function fruitDetails(id) {
    return await get(endpoints.fruit + id);
}

export async function editFruit(id, item) {
    return await put(endpoints.fruit + id, item);
}

export async function deleteFruit(id) {
    return await del(endpoints.fruit + id);
}

export async function searchFruits(query) {
    return await get(endpoints.search(query));
}
