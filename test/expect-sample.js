const expect = require("chai").expect;

let numbers = [1, 2, 3, 4, 5];

describe("expect test", () => {
    it("checks number", () => {
        expect(numbers).to.be.an("array");
        expect(numbers).to.be.include(2);
        expect(numbers).to.have.lengthOf(5);
    });
});
