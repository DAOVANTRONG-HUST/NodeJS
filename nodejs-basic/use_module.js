var my_module = require("./my_module");

var my_message = my_module.message("Hello, this is a message !!!");
console.log(my_message);

var result = my_module.add(4, 8);
console.log(result);

var res = my_module.sub(5, 14);
console.log(res);
