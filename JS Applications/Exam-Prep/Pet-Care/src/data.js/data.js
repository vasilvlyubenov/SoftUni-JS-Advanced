import { del, get, post, put } from "./api.js"

const endpoints = {
    pets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    addPet: '/data/pets',
    pet: '/data/pets/',
    addDonation: '/data/donation',
    getDon: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    getPetAndUser: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getPets() {
    return get(endpoints.pets);
}

export async function setPet(item) {
    await post(endpoints.addPet, item);
}

export async function petDetails(id) {
    return await get(endpoints.pet + id);
}

export async function editPet(id, item) {
    return await put(endpoints.pet + id, item);
}

export async function deletePet(id) {
    return await del(endpoints.pet + id);
}

export async function getDonations(id) {
    return await get(endpoints.getDon(id));
}

export async function addDonation(petId) {
    return await post(endpoints.addDonation, petId);
}

export async function userDonationCheck(petId, userId) {
    return await get(endpoints.getPetAndUser(petId, userId));
}
