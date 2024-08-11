const student = {
    name : "Suvajit",
    age : 23,
    eng : 70,
    math : 91,
    phy : 67,

    avg(){
        return (this.eng + this.math + this.phy)/3;
    }
}

// console.log(a); // through an error
// a=5;
try{
    console.log(a);
}catch(err){
    console.log("a is not defined");
    console.log(err);
}

// arrow function
const sum = (a,b) => {
    console.log(a+b);
};

const cube = (n) => { return n*n*n; };

// emplecite return
const multiply = (a,b) => (
    a*b
);

// setTimeOut

console.log("Hi there!");

setTimeout( () => {
  console.log("Apna College");
}, 5000);

console.log("Suvajit");

// set intervel

let id1 = setInterval( () => {
    console.log("Sayan")
}, 2000);


let id2 = setInterval( () => {
    console.log("Saugata")
}, 2500);

// clareInterval(id1)