var express = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hitarth'
});
var app = express();

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
    });
    
app.get("/",function(req,res){
    connection.query('SELECT * from htab2', function(err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else
          console.log('Error while performing Query.');
    });
    connection.end();
    
});
    
app.listen(3000);