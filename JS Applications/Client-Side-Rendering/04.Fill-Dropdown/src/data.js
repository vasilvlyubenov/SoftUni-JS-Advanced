import { get, post } from "./api.js";

export async function getData() {
    return await get();
}

export async function postData(text) {
    await post(text);
}