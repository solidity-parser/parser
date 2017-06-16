var fs = require("fs");
var SolidityParser = require("../src/index");

describe("#parse", function() {
  it("parses test file correctly", function() {
    var content = fs.readFileSync(__dirname + "/test.sol");
    SolidityParser.parse(content.toString());
  });
});
