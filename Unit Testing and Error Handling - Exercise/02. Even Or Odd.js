const isOddOrEven=require('./index.js');
const {assert}=require('chai');

describe('isOddOrEven function test',()=>{
    //false
    it('Should return false when input is not correct', () => {
        let actualResult = isOddOrEven(1);
        assert.strictEqual(actualResult, undefined);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isOddOrEven(10);
        assert.strictEqual(actualResult, undefined);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isOddOrEven(1.5);
        assert.strictEqual(actualResult, undefined);
    });

    //true
    it('Should return true', () => {
        let actualResult = isOddOrEven('rali');
        let result='even';
        assert.strictEqual(actualResult, result);
    });
    it('Should return true', () => {
        let actualResult = isOddOrEven('0');
        let result='odd';
        assert.strictEqual(actualResult, result);
    });
    it('Should return true', () => {
        let actualResult = isOddOrEven('1.5');
        let result='odd';
        assert.strictEqual(actualResult, result);
    });
    
})

