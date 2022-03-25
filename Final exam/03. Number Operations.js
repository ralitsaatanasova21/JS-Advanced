let numberOperations = require("./03. Number Operations_Resources");
let { expect } = require("chai");

describe("numberOperations tests", () => {
  describe("powNumber tests", () => {
    it("number", () => {
      expect(numberOperations.powNumber(2)).to.equal(4);
    });
  });

  describe("numberChecker", () => {
    it("The number is lower than 100!", () => {
      expect(numberOperations.numberChecker("")).to.equal(
        "The number is lower than 100!"
      );
    });
    it("The number is lower than 100!", () => {
      expect(numberOperations.numberChecker([])).to.equal(
        "The number is lower than 100!"
      );
    });
    it("The number is lower than 100!", () => {
      expect(numberOperations.numberChecker(-5)).to.equal(
        "The number is lower than 100!"
      );
    });
    it("The number is lower than 100!", () => {
      expect(numberOperations.numberChecker(10)).to.equal(
        "The number is lower than 100!"
      );
    });
    it("The number is lower than 100!", () => {
      expect(numberOperations.numberChecker(null)).to.equal(
        "The number is lower than 100!"
      );
    });
    it("The number is greater or equal to 100!", () => {
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
    it("The number is greater or equal to 100!", () => {
      expect(numberOperations.numberChecker(200)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
    it("The input is not a number!", () => {
      expect(() => numberOperations.numberChecker("rali")).to.throw(
        "The input is not a number!"
      );
    });
    it("The input is not a number!", () => {
      expect(() => numberOperations.numberChecker(undefined)).to.throw(
        "The input is not a number!"
      );
    });
  });

  describe("sumArrays", () => {
    it("arrays sums", () => {
      expect(
        numberOperations.sumArrays([1, 2, 3, 4], [5, 6, 7, 8, 9, 10])
      ).to.deep.equal([6, 8, 10, 12, 9, 10]);
    });
  });
});
