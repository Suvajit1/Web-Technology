let h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color change");
        }, delay);
    });
}

changeColor("red", 1000)
.then(()=>{
    console.log("color changed to red color");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("color changed to orange color");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("color changed to blue color");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("color changed to green color");
})
