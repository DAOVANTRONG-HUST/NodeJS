// Không có promise

// Sử dụng promise
var q = require("q");

function show(err, data){
    var defer = q.defer();
    if(err){
        defer.reject(err);
    }
    else{
        defer.resolve(data);
    }

    return defer.promise;
}


show(false, "data 1")
.then(function(data){
    console.log(data);
    var data2 = "data 2";
    return data2;
})