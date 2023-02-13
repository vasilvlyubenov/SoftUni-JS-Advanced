const motorcycleRider = require('../03.Motorcycle Rider -Resources');
const {expect} = require('chai');

describe('Motorcycle Rider tests', function () {

    describe('License tests', () => {

        it('AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('Invalid category', () => {
            expect(() => {motorcycleRider.licenseRestriction('a');}).to.throw('Invalid Information!');
        });
        it('Invalid category - number', () => {
            expect(() => {motorcycleRider.licenseRestriction(1);}).to.throw('Invalid Information!');
        });
    });

    describe('Showroom tests', () => {

        it('Valid input', () => {
            expect(motorcycleRider.motorcycleShowroom([50, 165, 210], 200)).to.equal('There are 2 available motorcycles matching your criteria!');
        });
        it('Valid input - string array', () => {
            expect(motorcycleRider.motorcycleShowroom(['50', '165', '210'], 200)).to.equal('There are 2 available motorcycles matching your criteria!');
        });
        it('Valid input - word in the array', () => {
            expect(motorcycleRider.motorcycleShowroom(['fifty', 165, 210], 200)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('Valid input - 0 count result', () => {
            expect(motorcycleRider.motorcycleShowroom([210], 200)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
        it('Valid input - edge case', () => {
            expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('All strings input', () => {
            expect(motorcycleRider.motorcycleShowroom(['300','250','400','550','fifty','-1000',], 600)).to.equal('There are 4 available motorcycles matching your criteria!');
        });
        it('Invalid input in array to be string', () => {
            expect(() => {motorcycleRider.motorcycleShowroom('50, 165, 210', 200);}).to.throw('Invalid Information!');
        });
        it('Invalid input in empty array', () => {
            expect(() => {motorcycleRider.motorcycleShowroom([], 200);}).to.throw('Invalid Information!');
        });
        it('Invalid input in empty array and string max value', () => {
            expect(() => {motorcycleRider.motorcycleShowroom([], '200');}).to.throw('Invalid Information!');
        });
        it('Invalid input in string max value', () => {
            expect(() => {motorcycleRider.motorcycleShowroom([50, 165, 210], '200');}).to.throw('Invalid Information!');
        });
        it('Invalid input in max value', () => {
            expect(() => {motorcycleRider.motorcycleShowroom([50, 165, 210], 49);}).to.throw('Invalid Information!');
        });
        it('Invalid input in max value - negative', () => {
            expect(() => {motorcycleRider.motorcycleShowroom([50, 165, 210], -1);}).to.throw('Invalid Information!');
        });
    });

    describe('Other spendings', () => {

        it('Valid input without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'helmet'], ['oil filter', 'oil filter'], false)).to.equal('You spend $460.00 for equipment and consumables!');
        });
        it('Valid input with discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter', 'oil filter'], true)).to.equal('You spend $504.00 for equipment and consumables with 10% discount!');
        });
        it('Empty equipment without discount', () => {
            expect(motorcycleRider.otherSpendings([], ['oil filter', 'oil filter'], false)).to.equal('You spend $60.00 for equipment and consumables!');
        });
        it('Empty equipment with discount', () => {
            expect(motorcycleRider.otherSpendings([], ['oil filter', 'oil filter'], true)).to.equal('You spend $54.00 for equipment and consumables with 10% discount!');
        });
        it('Empty consumables with discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'helmet'], [], true)).to.equal('You spend $360.00 for equipment and consumables with 10% discount!');
        });
        it('Empty consumables without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'helmet'], [], false)).to.equal('You spend $400.00 for equipment and consumables!');
        });
        it('invalid equipment', () => {
            expect(() => {motorcycleRider.otherSpendings('helmet', ['oil filter', 'oil filter'], true);}).to.throw('Invalid Information!');
        });
        it('invalid consumables', () => {
            expect(() => {motorcycleRider.otherSpendings(['helmet', 'helmet'], 'oil filter', false);}).to.throw('Invalid Information!');
        });
        it('invalid discount - string', () => {
            expect(() => {motorcycleRider.otherSpendings(['helmet', 'helmet'], ['oil filter', 'oil filter'], 'true');}).to.throw('Invalid Information!');
        });
        it('invalid discount - number', () => {
            expect(() => {motorcycleRider.otherSpendings(['helmet', 'helmet'], ['oil filter', 'oil filter'], 10);}).to.throw('Invalid Information!');
        });
        it('invalid all inputs', () => {
            expect(() => {motorcycleRider.otherSpendings('helmet', 'oil filter', 'true');}).to.throw('Invalid Information!');
        });
    });
});