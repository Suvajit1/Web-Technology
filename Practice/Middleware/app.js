const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./ExpressError");

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

app.get("/", (req, res) => {
  res.send("Home Page!");
});

const ckeckToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
      return next();
    }
    throw new ExpressError(401, "Access Denied!!");
  });

app.get("/api", ckeckToken, (req, res) => {
  res.send("data");
});

app.get("/random", (req, res) => {
  res.send("THis is a random page");
});

app.get("/err", (req, res) => {
  absc = abcd;
});

// app.use((err, req, res, next) => {
//   console.log("--------ERROR ONE--------");
//   res.send(err);
// });

// app.use((err, req, res, next) => {
//   console.log("--------ERROR TWO--------");
//   next(err);
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "some error occors" } = err;
  res.status(status).send(message);
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`app is listen to port ${port}`);
});
