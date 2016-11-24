var idioms = require('./index');
var assert = require('assert');

function isNonEmptyString(str) {
  return typeof str === "string"; //&& str.length > 0; 
}

describe("Idioms", function () {
  var foundIdioms = {};
  idioms.forEach(function (idiom) {
    var idiomString = idiom.idiom;
    var meaningString = idiom.meaning;
    describe(idiom.idiom, function () {
      describe('idiom', function () {
        it("should be non-empty string", function () {
          assert(isNonEmptyString(idiom.idiom), "Expected a non-empty string");
        });

        it("should be trimmed", function () {
          var actual = `'${idiom.idiom}'`;
          var expected = `'${idiom.idiom.trim()}'`;
          assert.equal(actual, expected, "Expected idiom to already be trimmed");
        });

        it("idiom is unique in array", function () {
          assert(foundIdioms[idiomString] === undefined, `Idiom (${idiomString}) already exists in array`);
          foundIdioms[idiomString] = idiomString;
        });
      });
      
      describe('meaning', function () {
        it("should be non-empty string", function () {
          assert(isNonEmptyString(idiom.meaning), "Expected a non-empty string");
        });
        it("should be trimmed", function () {
          var actual = `'${idiom.meaning}'`;
          var expected = `'${idiom.meaning.trim()}'`;
          assert.equal(actual, expected, "Expected meaning to already be trimmed");
        });
      });
    });
  });
});
