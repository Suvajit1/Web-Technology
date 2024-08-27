const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

// let createRandomUser = ()=>{
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
// };

// console.log(createRandomUser());

// let getUser = ()=>{
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
// };

// console.log(getUser());

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "BinDAS@123_"
});

// connection.query("show tables", (err, res)=>{
//     try{
//         if(err) throw err;
//         console.log(res);
//         console.log(res.length);
//         console.log(res[0]);
//         console.log(res[1]);
//     }
//     catch(err){
//         console.log(err);
//     }
// });

// let q = "show tables";
// connection.query(q, (err, res)=>{
//     try{
//         if(err) throw err;
//         console.log(res);
//         console.log(res.length);
//         console.log(res[0]);
//         console.log(res[1]);
//     }
//     catch(err){
//         console.log(err);
//     }
// });
// connection.end();

let getUser = ()=>{
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
};

// let q = "INSERT INTO user ( id, username, email, password ) VALUES(?, ?, ?, ?)";
// user1 = getUser();

// connection.query(q, user1, (err, res)=>{
//     try{
//         if(err) throw err;
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// });

// connection.end();


// let q = "INSERT INTO user ( id, username, email, password ) VALUES ?";
// users = [getUser(), getUser()];

// connection.query(q, [users], (err, res)=>{
//     try{
//         if(err) throw err;
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// });

// connection.end();


let q = "INSERT INTO user ( id, username, email, password ) VALUES ?";
let data = [];

for(let i=0; i<50; i++){
    data.push(getUser());
}

connection.query(q, [data], (err, res)=>{
    try{
        if(err) throw err;
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
});

connection.end();