let jsondata = '{"fact":"When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.","length":76}';

// json data --> JS object 
let jsObj = JSON.parse(jsondata);
console.log(jsObj);

console.log(jsObj.fact);


// JS object --> json data
let jsondata2 = JSON.stringify(jsObj);
console.log(jsondata2);
console.log(typeof(jsondata2));

let Student = {
    "name" : "Suvajit Sadhukhan",
    "age" : 24,
};

let jsondata3 = JSON.stringify(Student);
