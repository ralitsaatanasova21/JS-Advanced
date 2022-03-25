let testNumbers=require('./testNumbers');
const{assert, expect}=require('chai');

describe('testNumbers tests', ()=>{

    describe('sumNumbers tests', ()=>{
        it('input numbers', ()=>{
            expect(testNumbers.sumNumbers(1, 3)).to.equal('4.00');
        })
        it('input - number with + number', ()=>{
            expect(testNumbers.sumNumbers(1, -3)).to.equal('-2.00');
        })
        it('input with no numbers', ()=>{
            assert.equal(testNumbers.sumNumbers('a', 'b'), undefined);
        })
        it('input with 1 number', ()=>{
            assert.equal(testNumbers.sumNumbers('a', 1), undefined);
        })
    })

    describe('numberChecker tests', ()=>{
        it('input Nan', ()=>{
            expect(()=>testNumbers.numberChecker('rali')).to.throw('The input is not a number!');      
        })
        it('isEven', ()=>{
            assert.equal(testNumbers.numberChecker(4), 'The number is even!');
        })
        it('isOdd', ()=>{
            assert.equal(testNumbers.numberChecker(5), 'The number is odd!');
        })
    })

    describe('averageSumArray tests', ()=>{
        it('correct', ()=>{
            assert.equal(testNumbers.averageSumArray([1,2,3]), '2');    
        })
        
    })
})