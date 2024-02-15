const mysql = require("mysql2");
const express = require( 'express')
const app = express()
const port = 3000

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "car_dealership",
    password: ""
});

app.get("/car_dealership", function(req, res){
    pool.query("SELECT * FROM car_dealership", (err, data) => {
        if(err) return console.log(err);
        res.json( {
            car_dealership: data
        });
    });
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})