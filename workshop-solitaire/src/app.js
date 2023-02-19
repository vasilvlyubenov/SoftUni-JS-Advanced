import {
    createDeck,
    dealDeck,
    shuffleDeck
} from './util.js';
import {
    createDeckElement
} from './dom.js';

const zones = {
    stock: document.getElementById('stock'),
    foundations: document.getElementById('foundation'),
    piles: document.getElementById('pile'),
}

document.getElementById('board').addEventListener('click', onClick);

start();

function start() {


    const deck = createDeck();
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    console.log(deck);

    const {
        index,
        state
    } = dealDeck(deck);
    console.log(index, state);

    stateToBoard(state);
}

/**
 * 
 * @param {import('./util.js').GameState} state 
 */
function stateToBoard(state) {
    zones.stock.replaceChildren(
        createDeckElement(state.stock),
        createDeckElement(state.waste),
    );

    zones.foundations.replaceChildren(...Object.values(state.foundations).map(createDeckElement));
    zones.piles.replaceChildren(...state.piles.map(createDeckElement));
}

function onClick(e) {
    let deck = null;

    if (e.target.classList.contains('deck')) {
        deck = e.target;
    } else if (e.target.classList.contains('card')) {
        deck = e.target.parentElement;
    }

    if (deck !== null) {
        const type = deck.dataset.type;
        let suit = '';
        let index = -1;
        
        if (type === 'foundation') {
            suit = deck.dataset.suit;
        } else if (type === 'pile') {
            index = Number(deck.dataset.index);
        }
        console.log(type, suit, index);
    }

    
}