const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("this is a middleware 1");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("this is a middleware 2");
//   return next();
// });

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

// app.use((req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path);
//     console.log(req.time)
//     next();
// })

app.get("/", (req, res) => {
  res.send("Home Page!");
});

app.get("/random", (req, res) => {
  res.send("THis is a random page");
});

app.use((req, res) => {
    res.status(404).send("page not found");
});

app.listen(port, () => {
    console.log(`app is listen to port ${port}`);
});

