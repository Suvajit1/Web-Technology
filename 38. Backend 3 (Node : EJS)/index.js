const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

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

// app.get("/ig/:username", (req,res)=>{
//     let {username} = req.params;
//     // console.log(username);

//     let followers = ["Adom", "Bob", "Steve", "Arun"];
//     res.render("instragram.ejs", {username, followers});
// });

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;

    const instaData = require("./data.json");

    // console.log(instaData);
    let data = instaData[username];
    if(data){
        // console.log(data);
        res.render("instragram.ejs", {data});
    }else{
        res.render("error.ejs")
    }  
});