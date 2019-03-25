// Không có promise

// Sử dụng promise
var q = require("q");

function show(err, data){
    var defer = q.defer();

    if(err){
        defer.reject(err);
    }
    else
    {
        defer.resolve(data); // thêm giá trị vào biến promise
    }

    return defer.promise;
}

show(false, "data 1")
.then(function(data){
    console.log(data);
    var data2 = "data 2";
    return data2;
})
.then(function(data2){
    console.log(data2);
    var data3 = "data 3";
    return data3;
})
.then(function(data3){
    console.log(data3);
})
.catch(function(err){
    console.log(err);
})