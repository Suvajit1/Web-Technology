const express = require("express");
const app = express();
const prot = 8080;

app.listen(prot, ()=>{
    console.log(`ap is listening on port ${prot}`);
})