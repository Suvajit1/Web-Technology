const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
  .then(() => console.log('Connected to DB!'))
  .catch((err)=> console.log(err));


// parent
const fbUserSchema = new Schema({
    username : String,
    email : String,
});

const Fbuser = mongoose.model("Fbuser", fbUserSchema);

// child
const postSchema = new Schema({
    content : String,
    likes : Number,
    fbuser : {
            type : Schema.Types.ObjectId,
            ref : "Fbuser",
        },
});

const Post = mongoose.model("Post", postSchema);

// const addData = async ()=>{
//     // let user1 = new Fbuser({
//     //     username : "Suvajit1",
//     //     email : "suvajitss1107@gmail.com",
//     // });

//     let user1 = await Fbuser.findOne({username : "Suvajit1" });
//     let post2 = new Post({
//         content : "Bye Bye!",
//         likes : 10
//     });

//     post2.fbuser = user1;

//     // await user1.save();
//     await post2.save();
// }

// addData();

const getData = async ()=>{
    let result = await Post.find().populate("fbuser", "username");
    console.log(result);
}

getData();