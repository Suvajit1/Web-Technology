const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
  from: "Suvajit",
  to: "Swagata",
  message: "Send your picture",
  created_at: new Date(),
});

chat1
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

let allChat = [
  {
    from: "Suvajit",
    to: "Sayan",
    message: "I am fine! what about you?",
    created_at: new Date(),
  },

  {
    from: "Saugate",
    to: "Sayan",
    message: "lets hangout!",
    created_at: new Date(),
  },

  {
    from: "Suvajit",
    to: "Sayan",
    message: "I'm in",
    created_at: new Date(),
  },

  {
    from: "Sayan",
    to: "Saugata",
    message: "ok, what is the time?",
    created_at: new Date(),
  },

  {
    from: "Aritra",
    to: "Sayan",
    message: "May I join you?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChat);
