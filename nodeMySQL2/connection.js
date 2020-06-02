const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hitarth',
    multipleStatements: true
})

connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log("connection failed");
    }
});

connection.query('SELECT * from htab2', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
});
  
connection.end();