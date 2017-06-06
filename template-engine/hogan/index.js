var hogan = require("hogan.js");

var template = "Hello {{world}}!";
var hello = hogan.compile(template);

console.log(hello);
