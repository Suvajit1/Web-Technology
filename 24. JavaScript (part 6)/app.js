function gread(){
    let n=prompt("Enter your Name");
    console.log("hello! "+n);
}
gread();

function isAdult(){
    let age = prompt("Enter Your age : ");
    if(age<18){
        console.log("You are not adult");
    }else{
        console.log("You are adult");
    }
}

isAdult();

// creat a function to roll a dice
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}

// function with arguments
function add(num1, num2, num3) {
    return num1+num2+num3;
}

console.log(add(5,7,8));

function calculateAverage(a,b,c){
    avg = (a+b+c)/3;
    console.log(avg);
}
calculateAverage(4,6,2);

// calculate table
function printTable(){
    n= prompt("Enter number to print table : ");

    for(i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

printTable();

// Scope

let sum = 34 // global scope
function calSum(a,b){
    let sum=a+b;    // function scope
    console.log(sum);
}
calSum(10,5);

console.log(sum);

// block Scope applied only on let and const keyword
{
    let a= 25;
    console.log(a);
}
// console.log(a);

// lexical scope
function outerFunction(){
    let x = 5;
    let y = 6;
    function innerFunction(){   // function scope
        let a = 10;
        console.log(x);
    }

    // console.log(a); // cant be use because of lexical scope
    innerFunction();
}

outerFunction();
// innerFunction();

function outerFunc(){

    function innerFunc(){
        console.log(y);
    }

    let x = 5;
    let y = 6;

    innerFunc(); // hoisting
}

outerFunc();

