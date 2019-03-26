var express = require("express");
var app = express();

var controller = require(__dirname + "/apps/controller");

app.use(controller);

app.listen(3000, function(){
    console.log("Server is running port", 3000);
})