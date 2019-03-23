var fs = require("fs");

var data = fs.readFileSync("data.txt").toString();
console.log(data);

console.log("Ended");