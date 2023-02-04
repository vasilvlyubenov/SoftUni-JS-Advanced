const {expect} = require('chai');
const { isSymmetric } = require('../checkForSymetry');

describe('Symmetric function test', function () {

    it('Type check', () => {
        const input = 'a';
        expect(isSymmetric(input)).to.be.false;
    });

    it('Symmetric input', () => {
        const arr = [1,2,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('Not symetric', () => {
        const arr = [1,2,3,4];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('Number', () => {
        const input = 1;
        expect(isSymmetric(input)).to.be.false;
    });

    it('Object', () => {
        const obj = {1:1};
        expect(isSymmetric(obj)).to.be.false;
    });

    it('String element', () => {
        const arr = [1,2,2,'1'];
        expect(isSymmetric(arr)).to.be.false;
    });
});