var http = require("http"); 
// them mot thu vien

// tạo một server
var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, This is the first webserver with NodeJS");
    res.end();
});

// Lắng nghe biến server
server.listen(3333, function(){
    console.log("Server running!!!");
});