const {
    expect
} = require('chai');
const {
    rgbToHexColor
} = require('../rgbToHex');

describe('RGB to HEX convertor', function () {

    it('Correct input', () => {
        const r = 251;
        const g = 252;
        const b = 253;

        expect(rgbToHexColor(r, g, b)).to.be.equal('#FBFCFD');
    });

    it('Numbers over 255', () => {
        const r = 256;
        const g = 250;
        const b = 255;

        expect(rgbToHexColor(r, g, b)).to.be.undefined;
    });

    it('String input', () => {
        const r = '250';
        const g = '50';
        const b = '60';
        expect(rgbToHexColor(r,g,b)).to.be.undefined;
    });

    it('Negative number r', () => {
        const r = -1;
        const g = 1;
        const b = 1;

        expect(rgbToHexColor(r,g,b)).to.be.undefined;
    });

    it('Negative number g', () => {
        const r = 1;
        const g = -1;
        const b = 1;

        expect(rgbToHexColor(r,g,b)).to.be.undefined;
    });

    it('Negative number b', () => {
        const r = 1;
        const g = 1;
        const b = -1;

        expect(rgbToHexColor(r,g,b)).to.be.undefined;
    });

    it('Empty array', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('Floating point numbers', () => {
        expect(rgbToHexColor(2.1, 3.05, 6.5)).to.be.undefined;
    });

    it('Zeroes output', () => {
        const r = 15;
        const g = 15;
        const b = 15;

        expect(rgbToHexColor(r,g,b)).to.be.equal('#0F0F0F');
    });

    it('Full black', () => {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    });

    it('Full white', () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });
});