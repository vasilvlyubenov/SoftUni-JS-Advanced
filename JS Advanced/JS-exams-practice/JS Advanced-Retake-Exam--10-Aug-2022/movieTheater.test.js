const movieTheater = require('./movieTheater');
const {expect} = require('chai');

describe('Movie theater tests', function () {
    it('Age restrictions', () => {
        expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        expect(movieTheater.ageRestrictions('W')).to.equal('There are no age restrictions for this movie');
        expect(movieTheater.ageRestrictions('g')).to.equal('There are no age restrictions for this movie');
        expect(movieTheater.ageRestrictions('pg')).to.equal('There are no age restrictions for this movie');
    });

    it('Money spent', () => {
        expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 23.50');
        expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase is 21.00');
        expect(movieTheater.moneySpent(3, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase with applied discount is 40.80');
        expect(() => {movieTheater.moneySpent('3', ['Popcorn'], ['Water']);}).to.throw('Invalid input');
        expect(() => {movieTheater.moneySpent(1, 'Popcorn', ['Water']);}).to.throw('Invalid input');
        expect(() => {movieTheater.moneySpent(1, ['Popcorn'], 'Water');}).to.throw('Invalid input');
        expect(() => {movieTheater.moneySpent('a', ['Popcorn'], ['Water']);}).to.throw('Invalid input');
    });

    it('Reservation', () => {
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.equal(1);
        expect(() => {movieTheater.reservation({ rowNumber: 1, freeSeats: 7 }, 6);}).to.throw('Invalid input');
        expect(() => {movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '6');}).to.throw('Invalid input');
        expect(() => {movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 'a');}).to.throw('Invalid input');
    });
});