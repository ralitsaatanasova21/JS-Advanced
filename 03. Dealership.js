let dealership = require("./solution");
const { assert, expect } = require("chai");

describe("dealership tests", () => {
  describe("newCarCost", () => {
    it("input", () => {
      assert.equal(dealership.newCarCost("Audi A4 B8", 30000), "15000");
    });
    it("input", () => {
      assert.equal(dealership.newCarCost("Audi S8", 30000), "30000");
    });
    it('input', ()=>{
        assert.equal(dealership.newCarCost('Audi TT 8J', '88000'),'74000');
    })
    it('input', ()=>{
        assert.equal(dealership.newCarCost('Audi TT 8J', 20),'-13980');
    })
  });

  describe("carEquipment", () => {
    it("input", () => {
      expect(
        dealership.carEquipment(
          ["heated seats", "sliding roof", "sport rims", "navigation"],
          [1, 2, 3]
        )
      ).to.deep.equal(["sliding roof", "sport rims", "navigation"]);
    });
    it("input", () => {
      expect(
        dealership.carEquipment(
          ["heated seats", "sliding roof", "sport rims", "navigation"],
          [1]
        )
      ).to.deep.equal(["sliding roof"]);
    });
    it("input", () => {
      expect(
        dealership.carEquipment(
          ["heated seats", "sliding roof", "sport rims", "navigation"],
          [0]
        )
      ).to.deep.equal(["heated seats"]);
    });
    it("input", () => {
      expect(
        dealership.carEquipment(
          ["heated seats", "sliding roof", "sport rims", "navigation"],
          [-8]
        )
      ).to.deep.equal([undefined]);
    });
  });

  describe("euroCategory", () => {
    it("test", () => {
      assert.equal(
        dealership.euroCategory(0),
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
    it("test", () => {
      assert.equal(
        dealership.euroCategory(2),
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
    it("test", () => {
      assert.equal(
        dealership.euroCategory(4),
        "We have added 5% discount to the final price: 14250."
      );
    });
    it("test", () => {
      assert.equal(
        dealership.euroCategory(8),
        "We have added 5% discount to the final price: 14250."
      );
    });
  });
});
