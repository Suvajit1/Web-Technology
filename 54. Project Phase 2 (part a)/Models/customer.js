const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
  .then(() => console.log('Connected to DB!'))
  .catch((err)=> console.log(err));


const orderSchema = new Schema({
    item : String,
    price : Number,
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});


// pre
customerSchema.pre('findOneAndDelete', async (next)=>{
    console.log("pre middleware");
    next();
});

// post
customerSchema.post("findOneAndDelete", async (customer)=>{
    console.log("post middleware");
    if(customer && customer.orders.length){
        let res = await Order.deleteMany({_id : {$in : customer.orders}});
        console.log(res);
    }
});

const Customer = mongoose.model("Customer", customerSchema);


const deleteData = async ()=>{
    Customer.findByIdAndDelete("66e0d1d7544a2a73023f5756");
}

deleteData();



// const addCustomer = async ()=>{
//     let newCust = new Customer({
//         name : "sayan",
//     });

//     let newOrder = new Order({
//         item : "barger",
//         price : 250,
//     });

//     newCust.orders.push(newOrder);

//     await newOrder.save();
//     await newCust.save();
// }

// addCustomer();


// const findCustomer = async ()=>{
//     let result = await Customer.find().populate("orders");
//     // console.log(result);
//     console.log("Customer Details");
//     for( data of result){
//         console.log(data);
//     }
// }

// findCustomer();

// const findOrder = async ()=>{
//     let result = await Order.find();
//     console.log("all Orders");
//     console.log(result);
// }

// findOrder();

// mongoose.set('useFindAndModify', false);


const deleteCust = async ()=>{
    let customer = await Customer.findByIdAndDelete("66e20de48c2d7c7896a4e393");
    console.log(customer);
}

deleteCust();