var fs = require("fs");
var SolidityParser = require("../src/index");

describe("#parse", () => {
  it("parses test file correctly", () => {
    var content = fs.readFileSync(__dirname + "/test.sol");
    SolidityParser.parse(content.toString());
  });
});
