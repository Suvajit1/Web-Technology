const mongoose = require('mongoose');

main()
    .then((resust)=>{
        console.log("Connection with DB successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Schema Define
const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 20,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [1, "price is to low for amazon selling"],
    },
    discount : {
        type : Number,
        default : 0,
    },
    catagory : {
        type : String,
        enum : ["friction", "non-friction"],
    },
    genre : [String],
});

// create model 
const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title : "Mathametics X",
//     // author : "R D Sharma",
//     price : 1200
// });


// let book1 = new Book({
//     title : "Mathametics X",
//     author : "R D Sharma",
//     price : "abcd"
// });

// let book1 = new Book({
//     title : "Physics Class XII",
//     author : "H C Varma",
//     price : "599"
// });

// let book1 = new Book({
//     title : "Three Masketiers",
//     author : "Alaxzendra Dumas",
//     price : 499,
//     catagory : "non-friction",
//     genre : ["revange", "love", "friendship"],
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Book.find().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Book.findByIdAndDelete("66d4e431d04f5dc7db7e6719").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("66d4c88290752d753ba14e8e", {price : -600}, {runValidators : true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})