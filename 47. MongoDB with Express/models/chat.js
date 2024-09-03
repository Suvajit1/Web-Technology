const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    from : {
        type : String,
        required : true,
    },

    to : {
        type : String,
        required : true,
    },

    message : {
        type : String,
        max : [50, "to large message!"]
    },

    created_at : {
        type : Date,
        required : true,
    },
});


const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;