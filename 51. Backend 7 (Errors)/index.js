const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");


// logger
app.use((req, res, next)=>{
    req.time = new Date().toString();
    console.log(req.method, req.path, req.time, req.hostname);
    next();
});


app.use("/random", (req, res, next)=>{
    console.log("I'm only for random");
    next();
});

const checkToken = (req, res, next)=>{
    let {token} = req.query;

    if(token === "giveaccess"){
        return next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
};

app.get("/", (req, res)=>{
    res.send("root page");
});

app.get("/api", checkToken, (req,res)=>{
    res.send("data");
});


app.get("/random", (req, res)=>{
    res.send("random page");
});

app.get("/err", (req,res)=>{
    sbcd = abcd;
});

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to Admin is Forbidden");
});

// custom error handleling middleware
// app.use((err, req, res, next)=>{
//     // console.log(err);
//     console.log("-----ERROR------");
//     // next();
//     next(err);
// })

// app.use((err, req, res, next)=>{
//     console.log("-----ERROR 2------");
//     next(err);
// })

// app.use((err, req, res, next)=>{
//     console.log("-----ERROR------");
//     res.send(err);
// })

app.use((err, req, res, next)=>{
    let {status = 500, message = "some error occured"} = err;
    res.status(status).send(message);;
})

// 404
app.use((req, res)=>{
    res.status(404).send("page not found");
})

app.listen(port, ()=>{
    console.log(`app is listening on port : ${port}`);
});