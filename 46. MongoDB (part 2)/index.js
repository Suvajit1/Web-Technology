const mongoose = require('mongoose');

main()
    .then((resust)=>{
        console.log("Connection with DB successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

// const employeeSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     age : Number,
//     salary : Number
// });

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", employeeSchema);

// const user1 = User({
//     name : "Suvajit Sadhukhan", 
//     email : "suvajit@gmail.com", 
//     age : 24
// });

// const user2 = User({
//     name : "Saugata Ghosh", 
//     email : "saugata@gmail.com", 
//     age : 23
// });

// user1.save();
// user2.save();

// const user3 = User({
//     name : "Sayan Das", 
//     email : "sayan@gmail.com", 
//     age : 25
// });

// user3.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.insertMany([
//     {name : "Alis", email : "alis@gmail.com", age : 12},
//     {name : "Bob", email : "bob@gmail.com", age : 14},
//     {name : "Eve", email : "eve@gmail.com", age : 13},
// ]).then((data)=>{
//     console.log(data);
// });



// User.find().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.find({age : {$gte : 14}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age : {$gte : 14}}).then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOne({age : {$gte : 14}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.findById("66d23e8d7877606c4a28a9d7").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateOne({name : "Saugata Ghosh"}, {name: "Aritra Kumar", email : "aritra@gmail.com"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.updateOne({_id : "66d23f9e7697c2ae627b8e57"}, {age : 17}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age : {$lt : 14}}, {age : 16}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findOneAndUpdate({age : {$eq : 23}}, {age : 21}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findOneAndUpdate({age : {$eq : 16}}, {age : 15}, {new : true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.deleteOne({name : "Alis"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.deleteMany({age : {$lte : 14}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

User.findByIdAndDelete("66d243742591febb423b81c7").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});