const chooseYourCar = require('./chooseYourCar');
const {expect} = require('chai');

describe('Choose your car tests', function () {
    it('Choosing type', () => {
        expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.equal('This black Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.equal('This Sedan is too old for you, especially with that black color.');
        expect(() => {chooseYourCar.choosingType('Sedan', 'black', 1899);}).to.throw('Invalid Year!');
        expect(() => {chooseYourCar.choosingType('Sedan', 'black', 2023);}).to.throw('Invalid Year!');
        expect(() => {chooseYourCar.choosingType('type', 'black', 2022);}).to.throw('This type of car is not what you are looking for.');
        
    });

    it('Brand name', () => {
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
        expect(() => {chooseYourCar.brandName('a', 1);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1.1);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '2');}).to.throw('Invalid Information!');
    });

    it('Car fuel consumption', () => {
        expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
        expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal('The car burns too much fuel - 10.00 liters!');
        expect(() => {chooseYourCar.carFuelConsumption('100', 7);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption(100, '7');}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption(-100, 7);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption(100, -7);}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption(100, 'a');}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption('100', '7');}).to.throw('Invalid Information!');
        expect(() => {chooseYourCar.carFuelConsumption(0, 7);}).to.throw('Invalid Information!');
    });
});