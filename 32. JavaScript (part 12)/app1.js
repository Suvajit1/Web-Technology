// async function great(){
//     return "hello";
// }

// let hello = async ()=>{
//     console.log("hi");
// }

// great()
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });


async function great(){
    // throw "some error";  // error
    return "hello";     // result
}

great()
    .then((result)=>{
        console.log("promise was resolved");
        console.log("result :", result);
    })
    .catch((err)=>{
        console.log("promise was rejected");
        console.log("error :", err);
    });


// await keyword
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 2000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

// demo();


let h2 = document.querySelector("h2");
function changeColor(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h2.style.color = color;
            resolve("color change");
        }, 1000);
    });
}

async function doChange(){
    await changeColor("red");
    await changeColor("orange");
    await changeColor("blue");
    changeColor("green");
}

doChange();

