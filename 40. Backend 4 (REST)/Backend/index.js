const { Console } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, ()=>{
    console.log(`listening to port : ${port}`);
});

let posts = [
    {
        id : "1a",
        username : "apnacollege",
        content : "This is an education platfirm"
    },
    
    {
        id : "2b",
        username : "suvajit",
        content : "Hard work is important to achieve success"
    },
    
    {
        id : "3c",
        username : "sayan",
        content : "I got selected for my first internship"
    }
];

app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    // console.log(req.body);
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p)=>(id === p.id));
    console.log(post);
    // res.send("request working");
    res.render("show.ejs", {post});
});
