const expect=require('chai').expect;
const sum=require('./index.js');

describe('Sum of numbers', ()=>{
    it('Should return the sum of numbers in array',()=>{
        let numbers=[1,2,3,4,5];
        let expectedSum=15;

        let actualSum=sum(numbers);
        expect(actualSum).to.equal(expectedSum);
    });
    it('Should return zero if all numbers are zeros',()=>{
        let numbers=[0,0,0,0,0];
        let expectedSum=0;

        let actualSum=sum(numbers);
        expect(actualSum).to.equal(expectedSum);
    });
    it('Should return the sum with negative number in the array', () => {
        let numbers = [1, 2, 3, 4, -5];
        let expectedSum = 5;

        let acualSum = sum(numbers);
        expect(acualSum).to.equal(expectedSum);
    });
})

