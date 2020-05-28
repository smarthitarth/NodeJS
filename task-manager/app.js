var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');

app.get('/', function(req, res){
    res.send('<h1>Express works!,</h1>');
})

app.get('/tasks', function(req, res){
    fs.readFile('db.json', function(err, data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    });
})

server.listen(3000, function(){
    console.log('server listening to port 3000');
})