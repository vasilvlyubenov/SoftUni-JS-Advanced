const {
    expect
} = require('chai');
const lookupChar = require('../charLookup');

describe('Look up function trests', function () {

    it('standard input', () => {
        expect(lookupChar('abcd', 2)).to.equal('c');
    });

    describe('input check', () => {
        it('First param is not a string', () => {
            expect(lookupChar(1, 0)).to.be.undefined;
        });
        it('Second param is not a number', () => {
            expect(lookupChar(1,'a')).to.be.undefined;
        });
        it('Bigger index', () => {
            expect(lookupChar('abcd', 4)).to.equal('Incorrect index');
        });
        it('Smaller index', () => {
            expect(lookupChar('abcd', -1)).to.equal('Incorrect index');
        });
        it('Floating point index', () => {
            expect(lookupChar('abcd', 2.5)).to.be.undefined;
        });
    });
});