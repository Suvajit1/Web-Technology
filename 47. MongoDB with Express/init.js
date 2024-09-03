const mongoose = require('mongoose');
const Chat = require("./models/chat.js")


mongoose.connect('mongodb://127.0.0.1:27017/whatsapp').then((result) => {
    console.log('Connected to DB Successfully!')
}).catch((err)=>{
    console.log("some err in DB",err);
});

// let chat1 = new Chat({
//     from : "Sayan",
//     to : "Suvajit",
//     message : "how are you?",
//     created_at : new Date()
// });


// chat1.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });


// Chat.findByIdAndDelete("66d64afd1a1ee19cd08c921c").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


let allChat = [
    {
        from : "Suvajit",
        to : "Sayan",
        message : "I am fine! what about you?",
        created_at : new Date(),
    },

    {
        from : "Saugate",
        to : "Sayan",
        message : "lets hangout!",
        created_at : new Date(),
    },

    {
        from : "Suvajit",
        to : "Sayan",
        message : "I'm in",
        created_at : new Date(),
    },

    {
        from : "Sayan",
        to : "Saugata",
        message : "ok, what is the time?",
        created_at : new Date(),
    },

    {
        from : "Aritra",
        to : "Sayan",
        message : "May I join you?",
        created_at : new Date(),
    },
];

Chat.insertMany(allChat);
