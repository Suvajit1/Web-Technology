const stu1 = {
    name: "Suvajit",
    age : 24,
    marks : 80,
    getmarks(){
        return this.marks;
    }
};

const stu2 = {
    name : "Sayan",
    age  : 24,
    marks : 85,
    getmarks : ()=>{
        return this.marks;
    }
};

const stu3 = {
    name : "Saugata",
    age : 24,
    marks : 90,
    getmarks : function(){
        return this.marks;
    }
};

let arr1 = [1,2,3];
arr1.sayhello = () => {
    console.log("hello I am arr");
};

let arr2 = [1,2,3];

//Factory function
function personMAker(name, age){
    const Person = {
        name : name,
        age : age,
        talk(){
            console.log(`hi, I'm ${this.name}`);
        }
    }
    return Person;
}

let p1 = personMAker("suvajit", 24);
let p2 = personMAker("sayan", 24);

// New Operator
function Person(name, age){
    this.name = name;
    this.age = age;
}

let p3 = new Person("Sagata", 24);
let p4 = new Person("Rahul", 23);

Person.prototype.talk = function (){
    console.log(`hi, I'm ${this.name}`);
};


// Classes

class Student{
    constructor(name, age){
        console.log("student class constutor");
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`hi, I'm ${this.name}`);
    }
}

let s1 = new Student("Aritra", 22);
let s2 = new Student("Priyanka", 22);


// Inheritance
class Teacher extends Student{
    constructor(name,age,subject){
        console.log("teacher class constutor");
        super(name,age);
        this.subject = subject;
    }

    great(){
        console.log("hello bachhooo !");
    }
}

let t1 = new Teacher("Sayantan", 33, "math");