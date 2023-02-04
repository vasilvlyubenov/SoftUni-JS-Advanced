const { expect } = require('chai');
const { sum } = require('../sumOfNumbers');

describe('Sum of the elements of array', function () {

    it('sum of elements', ()=> {
        const arr = [1,1,1,1];
        expect(sum(arr)).to.be.equal(4)
    })
});