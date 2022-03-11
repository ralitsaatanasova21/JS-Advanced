const rgbToHexColor=require('./index.js');
const {assert}=require('chai');

describe('test rgbToHexColor functionality', () => {
    it('should work when Pass Zero as arg',()=>{
        let actualResult=rgbToHexColor(0,0,0);
        let expected='#000000';
        assert.strictEqual(actualResult,expected);
    })
    it('should work when Pass -Zero as arg',()=>{
        let actualResult=rgbToHexColor(-0,-0,-0);
        let expected='#000000';
        assert.strictEqual(actualResult,expected);
    })
    it('should return undefind when pass different from integer', () => {
        let actualResult = rgbToHexColor(1.2, 10, 30);
        assert.equal(actualResult, undefined);
    })
    it('should return undefind when first arg is NaN', () => {
        let input = 'da';
        let actualResult = rgbToHexColor(input, 10, 30);
        assert.equal(actualResult, undefined);
    });
    it('should retun undefind when first arg is less Than zero or biggest than 255', () => {
        let actualResult = rgbToHexColor(256, 20, 30);
        assert.equal(actualResult, undefined);
    });
    it('should retun undefind when second arg is less Than zero or biggest than 255', () => {
        let actualResult = rgbToHexColor(10, -20, 30);
        assert.equal(actualResult, undefined);
    })
    it('should return corret result when pass valid args',()=>{
        let actualResult=rgbToHexColor(10,20,30);
        let expectedResult='#0A141E';
        assert.strictEqual(actualResult,expectedResult);
    })
    //next
    it('should return undefind when pass different from integer', () => {
        let actualResult = rgbToHexColor(20, 1.10, 30);
        assert.equal(actualResult, undefined);
    })
    it('should return undefind when second arg is NaN', () => {
        let actualResult = rgbToHexColor(20, 'da', 30);
        assert.equal(actualResult, undefined);
    });
    it('should retun undefind when second arg is less Than zero or biggest than 255', () => {
        let actualResult = rgbToHexColor(10, -20, 30);
        assert.equal(actualResult, undefined);
    });
    it('should return false second arg is biggest than 255',()=>{
        let actualResult = rgbToHexColor(10, 256, 30);
        assert.equal(actualResult, undefined);
    })
    //next
    it('should return undefind when last arg is NaN', () => {
        let actualResult = rgbToHexColor(20, 20, -10);
        assert.equal(actualResult, undefined);
    });
    it('should retun undefind when second arg is less Than zero ', () => {
        let actualResult = rgbToHexColor(10, 20, -30);
        assert.equal(actualResult, undefined);
    })
    it('should return undefind when pass different from integer', () => {
        let actualResult = rgbToHexColor(10, 10, 1.30);
        assert.equal(actualResult, undefined);
    })
    it('should return false second arg is biggest than 255',()=>{
        let actualResult = rgbToHexColor(10, 30, 256);
        assert.equal(actualResult, undefined);
    })
})