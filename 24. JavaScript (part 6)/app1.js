// Function Expression
// Nameless function

const sum = function(a,b){
    return a+b;
}

console.log(sum(2,4));

// high order function
// taking function as an argument
function multipleGreet(func, n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello!");
}

multipleGreet(greet,5);
multipleGreet(function() {
    console.log("Namaste!")
}, 100);

// returning a function
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong request!")
    }
}

let request="odd";

// method
// const calculator = {
//     add : function (a,b){
//         return a+b;
//     },

//     sub : function (a,b){
//         return a-b;
//     } ,

//     mul : function (a,b){
//         return a*b;
//     }
// };

// method shorthand
const calculator = {
    add (a,b){
        return a+b;
    },

    sub (a,b){
        return a-b;
    } ,

    mul (a,b){
        return a*b;
    },

    div (a,b){
        return a/b;
    }
};


console.log(calculator.add(5,9));