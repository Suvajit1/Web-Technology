let arr= [1,2,3,4,5];
console.log(arr);

// forEach()
arr.forEach( (el) => {
    console.log(el);
});

let students= [
    {
        name : "Suvajit",
        marks :70

    },
    {
        name : "Saugata",
        marks :80
    },
    {
        name : "Sayan",
        marks :75
    }];

students.forEach( (stu) => {
    console.log(stu);
})

students.forEach( (stu) => {
    console.log(stu.marks);
})

// map()

let num = [1,2,3,4,5];

let double = num.map( function (el){
    return 2*el;
});

console.log(double);

let  gpa = students.map( (student) => {
    return student.marks /10;
});

console.log(gpa);


// filter()
num = [1,2,3,4,5,6,7,8,9];

let even = num.filter( (el)=>(el % 2 == 0));
console.log(even);

let ans =num.filter( (el)=>(el>5));
console.log(ans);

// every()
let a = num.every( (el)=>(el % 2 == 0));
console.log(a);

a= even.every( function (el) {
    return el%2 == 0;
});
console.log(a); 


// some()
a = [1,2,3,4].some( (el)=>(el % 2==0));
console.log(a); 

a = [1,3].some( (el)=>(el % 2==0));
console.log(a); 

// reduce()

a = [1,2,3,4].reduce( (res, el) => {
    console.log(res);
    return res+el});
console.log(a);

a = [1,2,3,4].reduce( (res,el)=>(res*el));
console.log(a);

// find maximum
arr=[1,3,5,7,3,0,13,7,9,10,2,5];
let max =arr.reduce( (max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log(max);


// practice question
// check if all numbers in an array is multiple of 10 or not
let brr = [10,20,30,40];
let crr = [10,30,41];

a = brr.every( (el)=>(el % 10 == 0)) ;
console.log(a);
a = crr.every( (el)=>(el % 10 == 0)) ;
console.log(a);


// find the min of an array
let min = arr.reduce( (min,el)=> {
    if(min>el){
        return el;
    }else{
        return min;
    }
})
console.log(min);

// spread
console.log(arr);
m=Math.min(...arr)
console.log(m);

console.log(...arr);
console.log(..."Apan College");

// let newArr = arr;
// newArr.push(17);

let newArr = [...arr];
newArr.push(17);
console.log(newArr);
console.log(arr);

let odd = [1,3,5,7];
even = [2,4,6,8];

num = [...odd, ...even];
console.log(num);

let data = {
    email : "suvajit@gmail.com",
    password : "abcd"
};

// let dataCopy ={...data};
let dataCopy ={...data, id : 123};
console.log(dataCopy);

let obj = {...odd};
console.log(obj);

// rest
function test(...arg){
    for(let i=0; i<arr.length; i++){
        console.log("you entered : ",arg[i]);
    }
}

test(1,2,4,6,8);

function test1(a,b,c,d){
    console.log(arguments);
}

test1(1,2,3,4);


function test2(a){
    console.log(arguments);
    console.log(arguments.length);
    console.log(a);
}

test2(1,2,3);

function sum(...arg){
    return arg.reduce( (sum,el)=>(sum+el));
}

s= sum(4,6,9,1,7);
console.log(s);


// destructing
let names = ["suvajit", "saugata", "sayan", "priyanka", "koyal"];
let [winner, runnerup]= names;
console.log(winner, runnerup);

let [good, bad, ...other]= names;
console.log(good,bad,other)

// destructing with object
const student ={
    name : "Suvajit",
    age : 17,
    class : 12,
    subjects : ["beng", "eng", "math", "phy", "chem", "comp"],
    username : "suvajit@123",
    password : "1a2b",
    // city : "kolkata"
};

let {username, password}=student;
console.log(username,password);

let {username : userid, password : pass, city : place ="bengaluru"}=student;
console.log(userid,pass,place);
 