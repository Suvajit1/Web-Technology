const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

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


app.get("/", (req, res)=>{
    res.send("root is working!");
});

// index route
// get all chat
app.get("/chats", async (req, res, neet)=>{
    try{
        let chats = await Chat.find();
        // console.log(chats);
        // res.send("all data set")
        res.render("index.ejs", {chats});
    }catch(err){
        next(err);
    }
});

// new and creat route
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/chats", async (req, res, next)=>{
    try{
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
    
        // chat.save().then((result)=>{
        //     // console.log(result);
        //     console.log("chat was saved")
        // }).catch((err)=>{
        //     console.log(err);
        // });
    
        await chat.save();
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});


// Edit and Update roure
app.get("/chats/:id/edit", async (req,res, next)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        // console.log(chat);
        res.render("edit.ejs", {chat});
    }catch(err){
        next(err);
    }
});

app.patch("/chats/:id", (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    console.log(msg);
    let new_time = new Date();
    Chat.findByIdAndUpdate(id, {message : msg}, {created_at : new_time}, {runValidators : true}).then((result)=>{
        // console.log(res);
        res.send("updated");
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
});

// destroy route
app.get("/chats/:id/delete", (req,res)=>{
    let {id} = req.params;
    // console.log(id);
    res.render("delete.ejs", {id});
});

app.delete("/chats/:id", async (req, res, next)=>{
    try{
        let {id} = req.params;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

// async wrap
function asyncWrap(fn){
    return function (req, res, next){
        fn(req, res, next).catch((err)=> next(err));
    }
}

// assyinchronous error handleing
// new show route
// app.get("/chats/:id", async (req, res, next)=>{
//     try{
//         let {id} = req.params;
//         let chat = await Chat.findById(id);
//         if(!chat){
//             return next(new ExpressError(404, "chat does not exist or deleted"));
//         }
//         res.render("edit.ejs", {chat});
//     }catch(err){
//         next(err);
//     }
// });

app.get("/chats/:id", asyncWrap( async (req, res, next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
        return next(new ExpressError(404, "chat does not exist or deleted"));
    }
    res.render("edit.ejs", {chat});
}));

const handlValidationError = function(err){
    console.log("Validation Error Occurs, plese follow rule(s)");
    console.log(err.message);
    return err;
}

// // custom error handling middleware

// app.use((err, req, res, next)=>{
//     console.log(err.name);
//     next(err);
// });

app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handlValidationError(err);
    }
    next(err);
});

app.use((err, req, res, next)=>{
    let {status = 500, message = "some internal error"} = err;
    res.status(status).send(message);
});

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
});