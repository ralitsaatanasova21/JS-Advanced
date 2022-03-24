let flowerShop = require("./flowerShop");
const { assert, expect } = require("chai");

describe("flowerShop tests", () => {
  describe("calcPriceOfFlowers", () => {
    //invalid
    it("test", () => {
      expect(() => flowerShop.calcPriceOfFlowers(8, "rali", "tyti")).to.throw(
        "Invalid input!"
      );
    });
    it("test", () => {
      expect(() => flowerShop.calcPriceOfFlowers([], "2", "tyti")).to.throw(
        "Invalid input!"
      );
    });
    it("test", () => {
      expect(() => flowerShop.calcPriceOfFlowers("rali", "", [])).to.throw(
        "Invalid input!"
      );
    });
    it("test", () => {
      expect(() => flowerShop.calcPriceOfFlowers("rali", 2.5, 8)).to.throw(
        "Invalid input!"
      );
    });
    it("test", () => {
      expect(() => flowerShop.calcPriceOfFlowers("rali", 2, 8.5)).to.throw(
        "Invalid input!"
      );
    });

    //valid
    it("test", () => {
      expect(flowerShop.calcPriceOfFlowers("rali", 2, 8)).to.equal(
        "You need $16.00 to buy rali!"
      );
    });
  });

  describe("checkFlowersAvailable", () => {
    //sold
    it("test", () => {
      expect(flowerShop.checkFlowersAvailable("rali", [1])).to.equal(
        "The rali are sold! You need to purchase more!"
      );
    });
    it("test", () => {
      expect(
        flowerShop.checkFlowersAvailable("rali", [1, 2, 3, 4, 5])
      ).to.equal("The rali are sold! You need to purchase more!");
    });
    it("test", () => {
      expect(flowerShop.checkFlowersAvailable("rali", [])).to.equal(
        "The rali are sold! You need to purchase more!"
      );
    });
    it("test", () => {
      expect(
        flowerShop.checkFlowersAvailable("Rali", ["Rose", "Lily", "Orchid"])
      ).to.equal("The Rali are sold! You need to purchase more!");
    });

    //available
    it("test", () => {
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])
      ).to.equal("The Rose are available!");
    });
  });

  describe("sellFlowers", () => {
    //correct
    it("test", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal(
        "Lily / Orchid"
      );
    });
    it("test", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(
        "Rose / Orchid"
      );
    });
    it("test", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal(
        "Rose / Lily"
      );
    });
  });
  //invalid
  it("test", () => {
    expect(() =>
      flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)
    ).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() =>
      flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)
    ).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() =>
      flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)
    ).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() =>
      flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "")
    ).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() =>
      flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], [])
    ).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() => flowerShop.sellFlowers([], 3)).to.throw("Invalid input!");
  });
  it("test", () => {
    expect(() => flowerShop.sellFlowers("", 3)).to.throw("Invalid input!");
  });
});
