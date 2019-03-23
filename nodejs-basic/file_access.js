var fs = require("fs");

// Open
// fs.open("data.txt", "r+", function(err, file){
//     if(err){
//         console.log("Open file is Error");
//         return;
//     }

//     console.log("Open file is successfully");
// });

// Read file sync

// var data = fs.readFileSync("data.txt").toString();
// console.log(data);

// Read file none sync

// fs.readFile("data.txt", function(err, data){
//     if(err){
//         console.log("Error read file");
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// });

fs.writeFile("data.txt", "New content file", function (err) {
    if (err) {
        console.log("Write file Error");
    }
    else {
        // fs.readFile("data.txt", function (err, data) {
        //     if (err) {
        //         console.log("Error read file");
        //     }
        //     else {
        //         console.log(data.toString());
        //     }
        // });

        var data = fs.readFileSync("data.txt").toString();
        console.log(data);
    }
});