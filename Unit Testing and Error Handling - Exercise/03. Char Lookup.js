const lookupChar=require('./index.js');
const {assert}=require('chai');

describe('lookupChar function test',()=>{
    //undefined
    it('Should return false when input is not correct', () => {
        let actualResult = lookupChar(10, 1.5);
        assert.strictEqual(actualResult, undefined);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = lookupChar(10, 10);
        assert.strictEqual(actualResult, undefined);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = lookupChar(10, 'str');
        assert.strictEqual(actualResult, undefined);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = lookupChar('str', 1.5);
        assert.strictEqual(actualResult, undefined);
    });

    //incorrect index
    it('Should return incorrect index', () => {
        let actualResult = lookupChar('str', 3);
        let result='Incorrect index';
        assert.strictEqual(actualResult, result);
    });
    it('Should return incorrect index', () => {
        let actualResult = lookupChar('str', 5);
        let result='Incorrect index';
        assert.strictEqual(actualResult, result);
    });
    it('Should return incorrect index', () => {
        let actualResult = lookupChar('str', -2);
        let result='Incorrect index';
        assert.strictEqual(actualResult, result);
    });

    //correct
    it('Should return true', () => {
        let actualResult = lookupChar('str', 2);
        let result='r'
        assert.strictEqual(actualResult, result);
    });
    
})

