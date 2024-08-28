const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "BinDAS@123_"
});


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.listen(port, ()=>{
    console.log(`App is listening on port : ${port}`);
});

app.get("/", (req, res)=>{
    let q = "select count(*) from user";
    try{
        connection.query(q, (err,result)=>{
            if(err) throw err;
            // console.log(result);
            // console.log(result[0]["count(*)"]);
            let count = result[0]["count(*)"];
            // res.send("Success");
            res.render("home.ejs", {count});
        });
    }catch(err){
        res.send("some error with database");
    }

    // res.send("welcome to home page!");
});

