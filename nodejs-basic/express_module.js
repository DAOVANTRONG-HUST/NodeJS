//=========================KHỞI TẠO CẤU SERVER BẰNG EXPRESSION==============================
//require express
var express = require('express');
//khởi tạo express
var app = express();
// tạo hành động cho url /
app.get('/', function (req, res) {
    res.send('hello world!');
});
//xét cổng port 8000 cho server
app.listen(8000, function(){
    console.log("Server is running port 8000 !!!");
});

//==========================ROUTER TRONG EXPRESS=============================================

//Router GET method.
app.get('/say', function (req, res) {
    res.send('oh are you press /say on domain');
});

//Router POST methed.
app.post('/say', function (req, res) {
    res.send('hello world');
});


// put method
app.put('/say', function (req, res) {
    res.send('hello world');
});
// delete method
app.delete('/say', function (req, res) {
    res.send('hello world');
});


//Nhận tất cả các method.
app.all('/say', function (req, res) {
    res.send('hello world');
});


// Regular expression trong router

//Chấp nhận abc hoặc abcd
app.get('/abcd?', function (req, res) {
    res.send('khớp');
  })

  //Bạn muốn path dạng abcd hoặc abcdd hoặc abcddd
  app.get('/abcd+', function (req, res) {
    res.send('khớp');
  })

  //Bạn muốn path abctrongd hay abcshagjsegd
  app.get('/abc*d', function (req, res) {
    res.send('khớp');
  });

  //=============================TRUYỀN THAM SỐ VÀO ROUTER============================

  app.get('/user/:name', function (req,res) {
	res.send('User name có tên: '+ req.params.name);
});


//====================================================================================
app.route('/user')  
    .get(function (req, res) {
        res.send('Hello World!');
    })
    .post(function (req, res) {
        res.send('Got a POST request');
    })
    .put(function (req, res) {
        res.send('Got a PUT request at /user');
    })
    .delete(function (req, res) {
        res.send('Got a DELETE request at /user');
    });