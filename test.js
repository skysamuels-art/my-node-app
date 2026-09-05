const assert = require("assert");
const message = require("./app");

assert.strictEqual(message, "Hello from Jenkins and Docker!");

console.log("Test passed successfully!");

process.exit(0);
