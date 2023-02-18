const carService = require("./carService");
const {expect} = require('chai');

describe('Car Service tests', function () {
    it('Is it expensive', () => {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('brakes')).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive('wheels')).to.equal('The overall price will be a bit cheaper');
    });

    it('Discount', () => {
        expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$');
        expect(carService.discount(8, 10)).to.equal('Discount applied! You saved 3$');
        expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
        expect(() =>{carService.discount('7', 10);}).to.throw('Invalid input');
        expect(() =>{carService.discount(7, '10');}).to.throw('Invalid input');
    });

    it('Parts to buy', () => {
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"])).to.equal(145);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff"])).to.equal(0);
        expect(() => {carService.partsToBuy([{ part: "blowoff valve", price: 145 }], "blowoff")}).to.throw('Invalid input');
        expect(() => {carService.partsToBuy('[{ part: "blowoff valve", price: 145 }]', ["blowoff"])}).to.throw('Invalid input');
    });
});