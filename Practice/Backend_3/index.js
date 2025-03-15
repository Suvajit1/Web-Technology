const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  let { username } = req.params;
  let data = instaData[username];
  if (data) {
    res.render("igpage.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`App is listening to prot : ${port}`);
});
