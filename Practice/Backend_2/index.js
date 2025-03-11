const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App is listenning on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You are in root path!");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of ${username}`);
});

app.get("/apple", (req, res) => {
  res.send("u send a GET request on apple path");
});

app.post("/apple", (req, res) => {
  res.send("u send a POST request on apple path");
});

app.get("/search", (req, res) => {
  let { q, col } = req.query;
  console.log(q);
  res.send(`search result for queary ${q}, ${col}`);
});

app.get("*", (req, res) => {
  res.send("path doe's not exist!");
});

// app.use((req, res) => {
//   console.log("new incoming request!");
//   res.send("This is a basic response");
// });
