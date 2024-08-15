const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listenning on port : ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic response");

//     // res.send({
//     //     name : "Suvajit Sadhukhan",
//     //     age : 24
//     // });

//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";  
//     res.send(code);
// });

app.get("/", (req, res)=>{
    res.send("Hello, I'm root");
});

app.get("/apple", (req, res)=>{
    res.send("you contacted apple path");
});

app.get("/orange", (req, res)=>{
    res.send("you contacted orange path");
});

app.get("*", (req, res)=>{
    res.send("This path doesn't exist");
});

app.post("/", (req,res)=>{
    res.send("you send a post request to root");
});