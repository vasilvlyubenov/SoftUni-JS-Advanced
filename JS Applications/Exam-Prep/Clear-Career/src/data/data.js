import { del, get, post, put } from "./api.js"

const endpoints = {
    offers: '/data/offers?sortBy=_createdOn%20desc',
    addOffer: '/data/offers',
    offer: '/data/offers/',
    sendApplication: '/data/applications',
    totalAplicaions: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    userApplications: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

export async function getOffers() {
    return get(endpoints.offers);
}

export async function setOffer(offer) {
    await post(endpoints.addOffer, offer);
}

export async function offerDetails(id) {
    return await get(endpoints.offer + id);
}

export async function editOffer(id, offer) {
    return await put(endpoints.offer + id, offer);
}

export async function deleteOffer(id) {
    return await del(endpoints.offer + id);
}

export async function addApllication(offerId) {
    await post(endpoints.sendApplication, {offerId});
}

export async function applications(id) {
    return await get(endpoints.totalAplicaions(id));
}

export async function userApps(offerId, userId) {
    return await get(endpoints.userApplications(offerId, userId));
}