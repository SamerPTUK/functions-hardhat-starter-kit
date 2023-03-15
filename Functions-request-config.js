const fs = require("fs")

// Loads environment variables from .env file (if it exists)
require("dotenv").config()

const Location = {
  Inline: 0,
  Remote: 1,
}

const CodeLanguage = {
  JavaScript: 0,
}

const ReturnType = {
  uint: "uint256",
  uint256: "uint256",
  int: "int256",
  int256: "int256",
  string: "string",
  bytes: "Buffer",
  Buffer: "Buffer",
}

const requestConfig = {};
beReady("./apis/api1.js", "ETH", "USD");

// Configure the request by setting the fields below
function beReady(path, coin1, coin2) {
  requestConfig.codeLocation = Location.Inline;
  requestConfig.secretsLocation = Location.Inline;
  requestConfig.codeLanguage = CodeLanguage.JavaScript;
  requestConfig.source = "";
  requestConfig.args = [fs.readFileSync(path).toString(), coin1, coin2];
  requestConfig.expectedReturnType = ReturnType.string;

  /*
  const requestConfig = {
    // location of source code (only Inline is curently supported)
    codeLocation: Location.Inline,
    // location of secrets (Inline or Remote)
    secretsLocation: Location.Inline,
    // code language (only JavaScript is currently supported)
    codeLanguage: CodeLanguage.JavaScript,
    // string containing the source code to be executed
    source: fs.readFileSync("./Functions-request-source.js").toString(),
    // args can be accessed within the source code with `args[index]` (ie: args[0])
    args: [fs.readFileSync(path).toString(), "ETH", "USD"],
    // expected type of the returned value
    expectedReturnType: ReturnType.string,
  }
  */
}

module.exports = requestConfig
