const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Listening on port no. ${port}`);
});

app.get("/register", (req,res)=>{
    let {user, pass} = req.query;
    res.send(`Standard get response : welcome ${user}`);
});

app.post("/register", (req,res)=>{
    console.log(req.body);
    let {user, pass} = req.body;
    res.send(`Standard post request : welcome ${user}`);
});
