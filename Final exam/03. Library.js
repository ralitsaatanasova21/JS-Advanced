let library = require("./index");
const { expect } = require("chai");

describe("Library tests", () => {
  describe("calcPriceOfBook tests", () => {
    it("invalid input - name of book", () => {
      expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input");
    });
    it("invalid input - year", () => {
      expect(() => library.calcPriceOfBook("1", "1")).to.throw("Invalid input");
    });
    it("year less than 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 1940)).to.equal(
        "Price of The Little Prince is 10.00"
      );
    });
    it("year is 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 1980)).to.equal(
        "Price of The Little Prince is 10.00"
      );
    });
    it("year greater than 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 1990)).to.equal(
        "Price of The Little Prince is 20.00"
      );
    });
  });

  describe("findBook", () => {
    it("booksArr length is zero", () => {
      expect(() => library.findBook([], "Book name")).to.throw(
        "No books currently available"
      );
    });
    it("desireBook is in the bookArr", () => {
      expect(library.findBook(["Rali", "Other", "Books"], "Rali")).to.equal(
        "We found the book you want."
      );
    });
    it("desireBook is not in the bookArr", () => {
      expect(
        library.findBook(["Others", "Tali", "Looks"], "Book name")
      ).to.equal("The book you are looking for is not here!");
    });
  });

  describe("arrangeTheBooks", () => {
    it("invalid input", () => {
      expect(() => library.arrangeTheBooks(-2)).to.throw("Invalid input");
    });
    it("invalid input", () => {
      expect(() => library.arrangeTheBooks("hi")).to.throw("Invalid input");
    });
    it("invalid input", () => {
      expect(() => library.arrangeTheBooks(1.5)).to.throw("Invalid input");
    });
    it("arranged books", () => {
      expect(library.arrangeTheBooks(5)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("arranged books", () => {
      expect(library.arrangeTheBooks(40)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("no space", () => {
      expect(library.arrangeTheBooks(45)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
