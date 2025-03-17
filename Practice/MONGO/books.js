const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },

  author: {
    type: String,
  },

  price: {
    type: Number,
    min: [1, "price is too low for amazon selling"],
  },

  discount: {
    type: Number,
    default: 0,
  },

  genre: [String],

  catagory: {
    type: Number,
    enum: ["friction", "non-friction"],
  },
});
