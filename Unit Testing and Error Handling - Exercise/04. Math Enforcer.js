const mathEnforcer=require('./index.js');
const {assert}=require('chai');

describe('mathEnforcer function test',()=>{
    describe('addFive function test',()=>{
        //undefined
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('10')===undefined);
        });
        it('Should return undefined an obj', () => {
            assert(mathEnforcer.addFive({})===undefined);
        });
        it('Should return undefined an array', () => {
            assert(mathEnforcer.addFive([])===undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined)===undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null)===undefined);
        });

        //correct
        it('Positive number +5', () => {
            assert(mathEnforcer.addFive(5)===10);
        });
        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5)===0);
        });
        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(1.5)===6.5);
        });
    });

    describe('subtractTen function test',()=>{
        //undefined
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('10')===undefined);
        });
        it('Should return undefined an obj', () => {
            assert(mathEnforcer.subtractTen({})===undefined);
        });
        it('Should return undefined an array', () => {
            assert(mathEnforcer.subtractTen([])===undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined)===undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null)===undefined);
        });

        //correct
        it('Positive number -10', () => {
            assert(mathEnforcer.subtractTen(5)=== -5);
        });
        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5)=== -15);
        });
        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5)=== 5.5);
        });
    });

    describe('sum function test',()=>{
        //correct
        it('Two possitive numbers', () => {
            assert(mathEnforcer.sum(10,20)===30);
        });
        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10,-2.5)===-12.5);
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1)===12.6);
        });

        //undefined
        it('Should return undefined with uncorrect input', () => {
            assert(mathEnforcer.sum(10, '10')===undefined);
        });
        it('Should return undefined with uncorrect input', () => {
            assert(mathEnforcer.sum('10', 10)===undefined);
        });
        it('Should return undefined with uncorrect inputs', () => {
            assert(mathEnforcer.sum('10', '20')===undefined);
        });
       
    });
 
})

