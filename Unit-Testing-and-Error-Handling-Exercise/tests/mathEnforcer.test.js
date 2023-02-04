const mathEnforcer = require("../mathEnforcer");
const {expect} = require('chai');

describe('Math enforcer', function () {

    describe('Add function', () => {
        it('Add zero', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it('Add string', () => {
            expect(mathEnforcer.addFive('0')).to.be.undefined;
        });
        it('Add negative', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('Add floating point number', () => {
            expect(mathEnforcer.addFive(1.1032551232)).to.be.closeTo(6.1, 0.01)
        });
    });

    describe('Subtract function', () => {
        it('Subtract zero', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it('Subtract string', () => {
            expect(mathEnforcer.subtractTen('0')).to.be.undefined;
        });
        it('Subtract 1 negative', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Subtract floating point number', () => {
            expect(mathEnforcer.subtractTen(10.1032551232)).to.be.closeTo(0.1, 0.01)
        });
    });

    describe('Sum function', () => {
        it('Sum numbers', () => {
            expect(mathEnforcer.sum(1,1)).to.equal(2);
        });
        it('Sum firnst input string', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        });
        it('Sum second input string', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });
        it('Sum 1 negative', () => {
            expect(mathEnforcer.sum(-10, 10)).to.equal(0);
        });
        it('Sum 2 negative', () => {
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
        });
        it('Sum floating point number', () => {
            expect(mathEnforcer.sum(10.1032551232, 20)).to.be.closeTo(30.1, 0.01)
        });
        it('Sum floating point number 2', () => {
            expect(mathEnforcer.sum(20, 10.1032551232)).to.be.closeTo(30.1, 0.01)
        });
    });
});