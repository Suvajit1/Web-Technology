const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user2 = new User({
//   name: "Sayan",
//   email: "sayan@gmail.com",
//   age: 24,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "Rahul", email: "rahul@gmail.com", age: 20 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Susmita", email: "susmita@gmail.com", age: 25 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $lt: 25 } })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("67d8808fd12c83a3464669c2")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndDelete("67d8808fd12c83a3464669c2")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
