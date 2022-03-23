let companyAdministration = require("./companyAdministration");
let { expect } = require("chai");

describe("companyAdministration test", () => {
  describe("hiringEmployee", () => {
    it('position is different from "Programmer"', () => {
      expect(() =>
        companyAdministration.hiringEmployee("Rali", "NotProgramer", 6)
      ).to.throw("We are not looking for workers for this position.");
    });
    it("successfully hired", () => {
      expect(
        companyAdministration.hiringEmployee("Rali", "Programmer", 6)
      ).to.equal("Rali was successfully hired for the position Programmer.");
    });
    it("successfully hired", () => {
      expect(
        companyAdministration.hiringEmployee("Rali", "Programmer", 3)
      ).to.equal("Rali was successfully hired for the position Programmer.");
    });
    it("successfully hired", () => {
      expect(
        companyAdministration.hiringEmployee("Rali", "Programmer", 2)
      ).to.equal("Rali is not approved for this position.");
    });
  });

  describe("calculateSalary", () => {
    it("correct input", () => {
      expect(companyAdministration.calculateSalary(2)).to.equal(30);
    });
    it("correct input", () => {
      expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });
    it("correct input", () => {
      expect(companyAdministration.calculateSalary(0)).to.equal(0);
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary(-5)).to.throw(
        "Invalid hours"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary("20")).to.throw(
        "Invalid hours"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary("")).to.throw(
        "Invalid hours"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary([])).to.throw(
        "Invalid hours"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary(null)).to.throw(
        "Invalid hours"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.calculateSalary(undefined)).to.throw(
        "Invalid hours"
      );
    });
  });

  describe("firedEmployee", () => {
    it("Invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)
      ).to.throw("Invalid input");
    });
    it("Invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)
      ).to.throw("Invalid input");
    });
    it("Invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "2")
      ).to.throw("Invalid input");
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.firedEmployee("Petar", 2)).to.throw(
        "Invalid input"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.firedEmployee("", 2)).to.throw(
        "Invalid input"
      );
    });
    it("Invalid input", () => {
      expect(() => companyAdministration.firedEmployee(2, 2)).to.throw(
        "Invalid input"
      );
    });
    it("correct input", () => {
      expect(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)
      ).to.equal("Petar, Ivan");
    });
    it("correct input", () => {
      expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
    });
  });
});
