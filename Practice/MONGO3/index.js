const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const ExpressError = require("./ExpressError");

main()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.send("root is working!");
});

// index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// new route
app.get("/chat/new", (req, res) => {
  res.render("new.ejs");
});

// create route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, message, to } = req.body;
    let newChat = new Chat({
      from: from,
      message: message,
      to: to,
      created_at: new Date(),
    });

    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// asyncWrap
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// show route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "Chat not found!"));
    }
    res.render("edit.ejs", { chat });
  })
);

// edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message } = req.body;
  await Chat.findByIdAndUpdate(
    id,
    {
      message,
      created_at: new Date(),
    },
    { runValidators: true }
  );
  res.redirect("/chats");
});

// destroy route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.use((err, req, res, next)=>{
  console.log(err.name);
  next(err);
})

// error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occurs" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
