var express = require('express');
var fs = require('fs');
var path=require('path');
var app = express();
var _dir = fs.realpathSync('.');
_dir = _dir+'/public/'
//server configuration
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile((_dir + '/index.html'));
 });
 
 app.get('/array', function (req, res) {
    res.sendFile((_dir + '/Arrays.html'));
 });
 
 app.get('/try', function (req, res) {
    res.sendFile((_dir + '/try.html'));
 });


app.get('/hello', function (req, res) {
    var person={firstName:'Ravi',lastName:'Tambade',age:47};
    res.send(person);
});

var server = app.listen(7667, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:7667", host, port)
});

  
