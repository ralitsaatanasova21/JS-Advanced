const isSymmetric=require('./index.js');
const {assert}=require('chai');

describe('issumetric function test',()=>{
    //false
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric('da');
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric({name: 'Rali'});
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric(0);
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric(10);
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric(-2);
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not correct', () => {
        let actualResult = isSymmetric(1.5);
        assert.strictEqual(actualResult, false);
    });
    it('Should return false when input is not Symetric', () => {
        let result = isSymmetric(['rali', 'bali']);
        assert.strictEqual(result, false);
    });

    //correct
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric([10]);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric(['10']);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric(['1.5']);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric([1.5]);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric(['rali']);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric(['rali', "rali"]);
        assert.equal(actualResult,true);
    });
    it('Should return true if arrays are symmetric',()=>{
        let actualResult=isSymmetric([{name: 'Rali'}]);
        assert.equal(actualResult,true);
    });

    //others
    it('Should return false when input is not Symetric', () => {
        let input = [1, 2, 3];
        let result = isSymmetric(input);
        assert.equal(result, false);
    });
    it('Should return false when input is not Symetric', () => {
        let input = [1, 2, -1];
        let result = isSymmetric(input);
        assert.equal(result, false);
    });
    it('Should return false when input is  Symetric', () => {
        let input = [10,20,20,10];
        let result = isSymmetric(input);
        assert.equal(result, true);
    });
    it('Should return false when input is not Symetric', () => {
        let input = [1, '2'];
        let result = isSymmetric(input);
        assert.equal(result, false);
    });
      
})

