const md5 = require("../app/md5");
const should = require("mocha").should;

describe("#md5", () => {
    context("with string argument", function () {
        it("should compute MD5 hash", (done) => {
            md5("Glad Chinda", function (err, hash) {
                if (err) return done(err);

                hash.should.be.a("string").and.be.match(/^[a-f0-9]{32}$/).and.be.equal("877dbb93f50eb8a89012e15bd37ee7e4");
                done();
            });
        });
    });
    context("with non-string argument", () => {
        it("should throw an error", (done) => {
            md5(12345, (err, hash) => {
                if (err) {
                    (() => {
                        throw err
                    }).should.throw("Data must be a string or a buffer");
                    return done();
                }
                done();
            });
        });
    });
});
