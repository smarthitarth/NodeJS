const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'hitarth',
    debug    :  false
});

// add rows in the table

function addRow(data) {
    let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
    let query = mysql.format(insertQuery,["htab2","id","name",data.id,data.name]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

//add multiple rows
function addMulRow() {
    let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?)';
    let values = [[768,"455"],[909,"3434"]]; // each array is one row
    let query = mysql.format(insertQuery,["htab2","id","name",values]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    //addRow({
    //    "id": "335",
    //    "name": "patel"
    //});
    addMulRow();
},5000); 