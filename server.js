var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var PRODUCTS = path.join(__dirname + '/sample.json');

app.get('/products', function(req, res){
  fs.readFile(PRODUCTS, function(err, data){
    if(err){
      console.log(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});