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


// home route
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


// show route
app.get("/user", (req,res)=>{
    q ="select * from user;";
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // res.send(result);
            let users = result;
            // console.log(users);
            res.render("users.ejs", {users});
        });
    }catch(err){
        res.send(err);
    }
});

// edit route
// get /user/:id/edit + patch /user/:id or
app.get("/user/:id/edit", (req, res)=>{
    let {id} = req.params;
    // res.send(id);
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            console.log(user);
            res.render("edit.ejs", {user});
        });
    }catch(err){
        res.send("There is some error on database")
    }
});

// update route
app.patch("/user/:id", (req, res)=>{
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            // console.log(user);
            if(formPass != user.password){
                res.send("wrong password!")
            }else{
                let q2 = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;
                connection.query(q2, (err, result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        res.send("some thing error is db");
    }
});

// delete route
app.get("/user/:id/delete", (req,res)=>{
    let {id} = req.params;
    let q = `select * from user where id = "${id}"`;
    try{
        connection.query(q, (err, result)=>{
            let user = result[0];
            // console.log(user);
            res.render("delete.ejs", {user});
        });
    }catch(err){
        res.send("some thing error is db");
    }
});

app.delete("/user/:id", (req, res)=>{
    let {id} = req.params;
    let {email : formEmail, password : formPass} = req.body;
    let q = `select * from user where id = "${id}"`;

    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let user = result[0];

            if(formPass != user.password){
                res.send("wrong password!")
            }
            else if(formEmail != user.email){
                res.send("wrong email");
            }
            else{
                let q2 = `DELETE FROM user WHERE id="${id}"`;
                connection.query(q2, (err, result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        res.send("some thing error is db");
    }
});

// add route
app.get("/user/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/user/new", (req, res)=>{
    // console.log(req.body);
    let {username, email, password} = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user ( id, username, email, password ) VALUES (?, ?, ?, ?)`
    user = [id, username, email, password];
    console.log(user);
    try{
        connection.query(q, user, (err, result)=>{
            if(err) throw err;
            console.log("added new user");
            res.redirect("/user");
        })
    }catch(err){
        res.send("some thing error is db");
    }
});