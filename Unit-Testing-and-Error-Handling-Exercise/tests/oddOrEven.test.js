const {expect} = require('chai');
const isOddOrEven = require('../oddOrEven');

describe('Odd or Even', function () {

    it('Number check', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('Array check', () => {
        expect(isOddOrEven(['1'])).to.be.undefined;
    });
    it('Object check', () => {
        expect(isOddOrEven({'1': 1})).to.be.undefined;
    });
    it('Odd check', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('Even check', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
});