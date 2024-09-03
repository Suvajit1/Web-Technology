const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


mongoose.connect('mongodb://127.0.0.1:27017/whatsapp').then((result) => {
    console.log('Connected to DB Successfully!')
}).catch((err)=>{
    console.log("some err in DB",err);
});


app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
});

app.get("/", (req, res)=>{
    res.send("root is working!");
});

// index route
// get all chat
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("all data set")
    res.render("index.ejs", {chats});
});

// new and creat route
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/chats", (req, res)=>{
    let {from, msg, to} = req.body;
    // console.log(from);
    // console.log(msg);
    // console.log(to);

    let chat = new Chat({
        from : from,
        message : msg,
        to : to,
        created_at : new Date(),
    });

    chat.save().then((result)=>{
        // console.log(result);
        console.log("chat was saved")
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
});


// Edit and Update roure
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    // console.log(chat);
    res.render("edit.ejs", {chat});
});

app.patch("/chats/:id", (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    console.log(msg);
    let new_time = new Date();
    Chat.findByIdAndUpdate(id, {message : msg}, {created_at : new_time}).then((result)=>{
        // console.log(res);
        res.send("updated");
    }).catch((err)=>{
        console.log(err);
    });
    
    res.redirect("/chats");
});