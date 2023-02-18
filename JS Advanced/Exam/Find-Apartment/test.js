const findNewApartment = require('./findApartment');
const {expect} = require('chai');

describe('Find apartment tests', function () {
    it('Is good location', () => {
        expect(findNewApartment.isGoodLocation('Smolyan', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        expect(() => {findNewApartment.isGoodLocation(['Sofia'], true);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isGoodLocation('Sofia', 'true');}).to.throw('Invalid input!');
    });

    it('Is large enough', () => {
        expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
        expect(findNewApartment.isLargeEnough([40, 50], 60)).to.equal('');
        expect(() => {findNewApartment.isLargeEnough('40, 50, 60', 60);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isLargeEnough([], 60);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isLargeEnough([40, 50, 60], '60');}).to.throw('Invalid input!');
    });

    it('Is affordable', () => {
        expect(findNewApartment.isItAffordable(1,1)).to.equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(2,1)).to.equal('You don\'t have enough money for this house!');
        expect(() => {findNewApartment.isItAffordable('1', 1);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(1, '1');}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(0, 1);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(1, 0);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(0, 0);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(-1, 1);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(1, -1);}).to.throw('Invalid input!');
        expect(() => {findNewApartment.isItAffordable(-1, -1);}).to.throw('Invalid input!');
    });
});