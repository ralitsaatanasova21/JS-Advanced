const createCalculator = require("./index.js");
const { assert } = require("chai");

describe("createCalculator function test", () => {
  it("With string", () => {
    let obj = createCalculator();
    obj.add("10");
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 10);
  });
  it("Witn positive number", () => {
    let obj = createCalculator();
    obj.add(10);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 10);
  });
  it("With negative number", () => {
    let obj = createCalculator();
    obj.add(-10);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, -10);
  });
  it("With decimal number", () => {
    let obj = createCalculator();
    obj.add(1.5);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 1.5);
  });

  it("With decimal number", () => {
    let obj = createCalculator();
    obj.add(3);
    obj.subtract(1.5);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 1.5);
  });
  it("With negative number", () => {
    let obj = createCalculator();
    obj.add(10);
    obj.subtract(-10);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 20);
  });
  it("Witn positive number", () => {
    let obj = createCalculator();
    obj.add(10);
    obj.subtract(5);
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 5);
  });
  it("With string", () => {
    let obj = createCalculator();
    obj.add(10);
    obj.subtract("10");
    let ActualResult = obj.get();
    assert.strictEqual(ActualResult, 0);
  });

});
