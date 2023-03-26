import { del, get, post, put } from "./api.js"

const endpoints = {
    games: '/data/games?sortBy=_createdOn%20desc',
    recentGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    createGame: '/data/games',
    game: '/data/games/',
    comments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    addComment: '/data/comments'
}

export async function getGames() {
    return get(endpoints.games);
}

export async function getRecentGames() {
    return await get(endpoints.recentGames);
}

export async function addGame(item) {
    await post(endpoints.createGame, item);
}

export async function gameDetails(id) {
    return await get(endpoints.game + id);
}

export async function editGame(id, item) {
    return await put(endpoints.game + id, item);
}

export async function deleteGame(id) {
    return await del(endpoints.game + id);
}

export async function getComments(gameId) {
    return await get(endpoints.comments(gameId));
}

export async function addComment(data) {
    return await post(endpoints.addComment, data);
}
