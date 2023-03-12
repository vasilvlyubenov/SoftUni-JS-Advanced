import { del, get, post, update } from "./api.js";

async function getData() {
    return await get();
}

async function addData(data) {
    await post('', data);
}

async function updateData(id, data) {
    await update(`/${id}`, data);
}

async function deleteData(id) {
    await del(`/${id}`);
}

export {
    getData,
    addData,
    updateData,
    deleteData
}