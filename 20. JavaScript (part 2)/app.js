// console.log("Hello World!");
console.log("Appna College")
let a=5;
let b=10;
console.log(a+b);
console.log("suvajit","sadhukhan");
console.log("suvajit"+"sadhukhan");

// Template Literals
age=23;
output= `i'm ${age} years old`;
console.log(output);

console.log(age>30);
console.log(age!=30);

console.log('a'>'A');
console.log('*'<'&');
console.log('a'-'A');

// Condition Statement
age = 23;
if(age>18){
    console.log("You can vote");
}else{
    console.log("you can't vote");
}

console.log(!true);

let val = 4;

switch(val){
    case 0 : 
        console.log("OFF");
        break;

    case 1 : 
        console.log("ON");
        break;

    default : 
        console.log("broken");
}

alert("Something is wrong!");
console.error("this is an error message!");
console.warn("This is an Warning!");

let fname = prompt("Enter your first name");
let lname = prompt("Enter your last name");

console.log(fname,lname);
