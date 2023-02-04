function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error('Error');
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
    const result = [];

    for (const card of cards) {
        const face = card.substring(0, card.length - 1);
        const suit = card.substring(card.length - 1);

        try {
            result.push(createCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
        }
    }  

        console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])