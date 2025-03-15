const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a home page");
});

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`you register by get request with username ${username}`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`you register by post request with username ${username}`);
});
app.listen(port, () => {
  console.log(`app is listenning to port no. ${port}`);
});
