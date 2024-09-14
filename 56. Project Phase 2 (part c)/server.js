const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const sessionOption = {
    secret : "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOption)); 
app.use(flash());

// middleware
app.use((req, res, next)=>{
    // console.log("hi1");
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    // console.log(res.locals.successMsg);
    // console.log(res.locals.errorMsg);
    // console.log("hi2");
    next();
})

app.get("/", (req, res)=>{
    // console.log(req.session);
    res.send("hi! I'm root");
});

app.get("/test", (req, res)=>{
    res.send("test successful");
});

app.get("/reqcount", (req, res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`you sent request ${req.session.count} times`);
});

app.get("/register", (req, res)=>{
    // console.log(req.session);
    let {name = "anonymous"} = req.query;
    req.session.name = name;

    if(name === "anonymous"){
        req.flash("error", "User is not registered");
    }else{
        req.flash("success", "users is registered successfully");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    // console.log(req.session);
    // console.log(req.flash("success"));
    // res.render("page.ejs", {name : req.session.name, msg : req.flash("success")});
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error");
    res.render("page.ejs", {name : req.session.name});
})

app.listen(3000, ()=>{
    console.log("app is listening at port 3000");
});