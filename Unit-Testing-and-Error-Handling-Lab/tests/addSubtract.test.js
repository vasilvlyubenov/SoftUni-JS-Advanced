const {expect} = require('chai');
const {createCalculator} = require('../addSubtract');

describe('calculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns 0', () =>{
        expect(calc.get()).to.equal(0);
    });

    describe('numbers', () => {
        it('add numbers', () => {
            calc.add(1);
            calc.add(1);

            expect(calc.get()).to.equal(2);
        });

        it('subtract', () => {
            calc.add(2);
            calc.subtract(1);

            expect(calc.get()).to.equal(1);
        });
    });

    describe('strings', () => {
        it('add string', () => {
            calc.add(1);
            calc.add('1');

            expect(calc.get()).to.equal(2);
        });

        it('subtract string', () => {
            calc.add(2);
            calc.subtract('1');
            
            expect(calc.get()).to.equal(1);
        });
    });
});

