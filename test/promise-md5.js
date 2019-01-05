const should = require("mocha").should;
const promiseMd5 = require("../app/promise-md5");

describe("#promiseMd5()", () => {
    context("with string argument", () => {
        it("should compute MD5 hash (promise)", () => {
            return promiseMd5("Glad Chinda").then((hash) => {
                hash.should.be.a("string").and.be.match(/^[a-f0-9]{32}$/).and.be.equal("877dbb93f50eb8a89012e15bd37ee7e4");
            });
        });
    });

    context("with non-string argument", () => {
        it("should throw an error", () => {
            return promiseMd5(12345).catch((err) => {
                (() => {
                    throw err
                }).should.throw("Data must be a string or a buffer");
            });
        });
    });

});
