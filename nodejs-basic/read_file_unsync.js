var fs = require("fs");

var data = fs.readFile("data.txt", function(err, data){
    if(err){
        console.log("Access file error!!!");
    }
    else
    {
        console.log(data.toString());
    }
});

console.log("Ended");