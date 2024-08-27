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

connection.query("show tables", (err, res)=>{
    try{
        if(err) throw err;
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
});

connection.end();