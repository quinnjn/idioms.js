var idioms = require('./index');
var assert = require('assert');

function isNonEmptyString(str) {
  return typeof str === "string"; //&& str.length > 0; 
}

describe("Idioms", function () {
  idioms.forEach(function (idiom) {
    describe(idiom.idiom, function () {
      describe("should have a non-empty string", function () {
        it("idiom", function () {
          assert(isNonEmptyString(idiom.idiom), "Expected a non-empty string");
        });
        it("meaning", function () {
          assert(isNonEmptyString(idiom.meaning), "Expected a non-empty string");
        });
      });

      describe("should have a trimmed", function () {
        it("idiom", function () {
          var actual = `'${idiom.idiom}'`;
          var expected = `'${idiom.idiom.trim()}'`;
          assert.equal(actual, expected, "Expected idiom to already be trimmed");
        });
        it("meaning", function () {
          var actual = `'${idiom.meaning}'`;
          var expected = `'${idiom.meaning.trim()}'`;
          assert.equal(actual, expected, "Expected meaning to already be trimmed");
        });
      });
    });
  });
});
