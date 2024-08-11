function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// Callback hell
let h1 = document.querySelector("h1");


// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// }, 3000);


// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);


function changeColor(color, delay, nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green",1000, ()=>{
            changeColor("blue",1000, ()=>{
                changeColor("purple", 1000);
            });
        });
    });
});

// promise

// function saveToDB(data){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         console.log("Success : your data was saved");
//     }else{
//         console.log("Failure : Week Connection");
//     }
// }

// saveToDB("apnacollege");


// function saveToDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }


// // saveToDB("apnacollege",
// //     ()=>{
// //         console.log("Success : your data was saved");
// //     },
// //     ()=>{
// //         console.log("Failure : Week Connection");
// //     }
// // )

// // callback hell
// saveToDB("apnacollege",
//     ()=>{
//         console.log("Success1 : your data1 was saved");
//         saveToDB("helloworld", 
//             ()=>{
//                 console.log("Success2 : your data2 was saved");
//                 saveToDB("suvajit",
//                     ()=>{
//                     console.log("Success3 : your data3 was saved");
//                     },
//                     ()=>{
//                         console.log("Failure2 : Week Connection");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("Failure2 : Week Connection");
//             }
//         );
//     },
//     ()=>{
//         console.log("Failure1 : Week Connection");
//     }
// )

// function saveToDB(data){
//     return new Promise((success, failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10) + 1;
//         if(internetSpeed > 4){
//             success("Success : your data was saved");
//         }else{
//             failure("Failure : Week Connection");
//         }
//     });
// }

// saveToDB("apnacollege");

function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("Success : your data was saved");
        }else{
            reject("Failure : Week Connection");
        }
    });
}


// .then() and .catch()

// let request = saveToDB("apnaCollege");   // req is promise object

// request
//     .then(()=>{
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//         console.log(request);
//     });


// saveToDB("apnaCollege")
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });


// promise chaining

// saveToDB("hello World")
//     .then(()=>{
//         console.log("data1 saved");
//         saveToDB("Suvajit")
//             .then(()=>{
//                 console.log("data2 saved");
//             })
//             .catch(()=>{
//                 console.log("promise2 rejected");
//             })
//     })
//     .catch(()=>{
//         console.log("promise1 rejected");
//     });

// better way

// saveToDB("hello World")
//     .then(()=>{
//         console.log("data1 saved");
//         return saveToDB("Suvajit")
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return saveToDB("Sadhukhan")
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("promise rejected");
//     });

// result and error

saveToDB("hello World")
    .then((result)=>{
        console.log("result :-", result);
        console.log("data1 saved");
        return saveToDB("Suvajit");
    })
    .then((result)=>{
        console.log("result :-", result);
        console.log("data2 saved");
        return saveToDB("Sadhukhan");
    })
    .then((result)=>{
        console.log("result :-", result);
        console.log("data3 saved");
    })
    .catch((error)=>{
        console.log("error :- ",error);
        console.log("promise rejected");
    });