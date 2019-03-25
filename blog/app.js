var express = require("express");

var app = express();

// tìm cách để tạo router trong controller và include controller vào trong file app.js
var controller = require(__dirname + "/app/controller");

app.use(controller); // include được controller vào trong app.js
app.listen(3000, function(){
    console.log("Server is running on port", 3000);
})