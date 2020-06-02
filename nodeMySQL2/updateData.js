const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'hitarth',
    debug    :  false
});

// update rows

function updateRow(data) {
    let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(updateQuery,["htab2","name",data.name,"id",data.id]);
    // query = UPDATE `htab2` SET `name`='hitarthsir' WHERE `id`='1'
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // update row
    updateRow({
        "id": "1",
        "name": "hitarthsir"
    });
},5000);
