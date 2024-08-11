// object
let student={
    name : "Suvajit",
    age : 23,
    marks : 70,
    city : "kolkata"
};

console.log(student["city"]);
console.log(student.city);

student.city="mumbai";
console.log(student);

student.gender = "male";
console.log(student);

student.marks = "A";
console.log(student);

delete student.age;
console.log(student);

// object os objects
const classInfo ={
    suvajit : {
        grade : "A+",
        city : "Kolkata"
    },

    manishika : {
        grade : "S",
        city : "Banaras"
    },

    koyal : {
        grade : "A",
        city : "Bengaluru"
    }
}

console.log(classInfo);

// array of objects
const classInformation = [
    {   name : "Suvajit",
        grade : "A+",
        city : "Kolkata"
    },

    {   name : "Manishika",
        grade : "S",
        city : "Banaras"
    },

    {   name : "Koyal",
        grade : "A",
        city : "Bengaluru"
    }
]

console.log(classInformation);

// Math object

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-4));
console.log(Math.pow(2,5));

console.log(Math.floor(3.56));
console.log(Math.ceil(3.56));

console.log(Math.random());

// 1-10
console.log(Math.floor(Math.random()*10)+1);

// 21-25
console.log(Math.floor(Math.random()*5)+21);

let c=classInformation.pop();
console.log(c);