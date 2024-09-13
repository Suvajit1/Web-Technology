const express = require("express");
const app = express();
const users = require("./routes/user");
const posts = require("./routes/post");
const cookieParser = require("cookie-parser");

app.use(cookieParser("sectercode"));

app.get("/", (req, res)=>{
    res.send("hi! I'm root");
});

app.use("/users", users);
app.use("/posts",posts);

app.get("/sendcookies", (req, res)=>{
    res.cookie("great", "namste");
    res.cookie("origin", "india");
    res.send("we send you a cookie!");
})

// app.get("/getcookies", (req,res)=>{
//     console.log(req.cookies);
//     res.send("got the cookies!");
// });

app.get("/getcookies", (req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`hi!, ${name}`);
});


app.get("/sendsingedcookies", (req, res)=>{
    res.cookie("col", "red", {signed: true});
    res.send("signed cookie send");
});

app.get("/verify", (req, res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("verified");
});

app.listen(3000, ()=>{
    console.log("app is listening at port 3000");
})