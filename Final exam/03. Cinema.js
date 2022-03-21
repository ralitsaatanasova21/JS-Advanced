let cinema = require("./cinema");
const { assert, expect } = require("chai");

describe("cinema tests", () => {
  describe("showMovies tests", () => {
    it("lenght=0", () => {
      assert.equal(
        cinema.showMovies([]),
        "There are currently no movies to show."
      );
    });
    it("lenght>0", () => {
      assert.equal(cinema.showMovies(["rali says hello"]), "rali says hello");
    });
    it("lenght=1", () => {
      assert.equal(cinema.showMovies(["rali"]), "rali");
    });
    it("numbers", () => {
      assert.equal(cinema.showMovies([8, 5, 9]), "8, 5, 9");
    });
    it("negative number", () => {
      assert.equal(cinema.showMovies([-2]), "-2");
    });
  });

  describe("ticketPrice tests", () => {
    it("invalid input", () => {
      expect(() => cinema.ticketPrice("rali")).to.throw(
        "Invalid projection type."
      );
    });
    it("invalid input", () => {
      expect(() => cinema.ticketPrice("")).to.throw(
        "Invalid projection type."
      );
    });
    it("invalid input", () => {
      expect(() => cinema.ticketPrice(10)).to.throw("Invalid projection type.");
    });
    it("correct input", () => {
      assert.equal(cinema.ticketPrice("Premiere"), "12");
    });
    it("correct input", () => {
      assert.equal(cinema.ticketPrice("Normal"), "7.50");
    });
    it("correct input", () => {
      assert.equal(cinema.ticketPrice("Discount"), "5.50");
    });
  });

  describe("swapSeatsInHall tests", () => {
    it("If one of the two numbers do not exist", () => {
      assert.equal(
        cinema.swapSeatsInHall("rali", 10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("The numbers are not integers", () => {
      assert.equal(
        cinema.swapSeatsInHall("rali", "10"),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("If one of the numbers is greater than the capacity of the hall ", () => {
      assert.equal(
        cinema.swapSeatsInHall(30, 10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less or equal of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(0, 10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less or equal of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 0),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less or equal of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(-5, 10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(5, -10),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Seats are less of 0 ", () => {
      assert.equal(
        cinema.swapSeatsInHall(5, ['hi']),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Correct", () => {
      assert.equal(
        cinema.swapSeatsInHall(20, 10),
        "Successful change of seats in the hall."
      );
    });
    it("Correct", () => {
      assert.equal(
        cinema.swapSeatsInHall(8, 20),
        "Successful change of seats in the hall."
      );
    });
    it("Correct", () => {
      assert.equal(
        cinema.swapSeatsInHall(8, 16),
        "Successful change of seats in the hall."
      );
    });
  });
});
