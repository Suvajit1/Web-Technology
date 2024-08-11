let btn = document.querySelector("button");

btn.onclick = function (){
    console.log("button was clicked");
}

function sayHello(){
    alert("Hello!");
}

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for(eachbtn of btns){
    eachbtn.onclick = sayHello;
    eachbtn.onmouseenter = function (){
        console.log("you are using onmouseenter");
    }
}