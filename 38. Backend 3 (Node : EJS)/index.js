const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, (req, res)=>{
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res)=>{
    // res.send(`home page`);
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/rolldice", (req,res)=>{
    // let num = Math.floor(Math.random()*6)+1;
    let diceVal = Math.floor(Math.random()*6)+1;

    // res.render("rolldice",{diceVal : num});
    // res.render("rolldice",{diceVal : diceVal});
    res.render("rolldice",{ diceVal });
});

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    // console.log(username);

    let followers = ["Adom", "Bob", "Steve", "Arun"];
    res.render("instragram.ejs", {username, followers});
});