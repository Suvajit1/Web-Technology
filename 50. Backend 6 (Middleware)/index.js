const express = require("express");
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port : ${port}`);
});

// app.use((req, res)=>{
//     let {q} = req.query;
//     console.log(q);
//     console.log("I am middlewere");
//     res.send("middleware finished!")
// });

// app.use((req, res, next)=>{
//     console.log("I am 1st middlewere");
//     next();
//     console.log("next 1");
// });

// app.use((req, res, next)=>{
//     console.log("I am 2nd middlewere");
//     return next();
//     console.log("next 2");
// });

app.use("/random", (req, res, next)=>{
    console.log("I'm only for random");
    next();
});

// logger
app.use((req, res, next)=>{
    // req.time = new Date(Date.now()).toString();
    req.time = new Date().toString();
    console.log(req.method, req.path, req.time, req.hostname);
    next();
});

app.use("/api", (req, res, next)=>{
    let {token} = req.query;

    // ether do this
    if(token === "giveaccess"){
        return next();
    }
    res.send("ACCESS DENIED");

    // // or this
    // if(token === "giveaccess"){
    //     next();
    // }else{
    //     res.send("ACCESS DENIED");
    // }
});

app.get("/api", (req,res)=>{
    res.send("data");
});

app.get("/", (req, res)=>{
    // console.log("root");
    res.send("root page");
});

app.get("/random", (req, res)=>{
    // console.log("random");
    res.send("random page");
});

// 404
app.use((req, res)=>{
    res.status(404).send("page not found");
})