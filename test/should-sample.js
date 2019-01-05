const should = require('chai').should();

let numbers = [1, 2, 3, 4, 5];

describe("should test", () => {
    it("checks numbers", () => {
        numbers.should.be.an("array");
        numbers.should.be.include(2);
        numbers.should.have.lengthOf(5);
    });
});
