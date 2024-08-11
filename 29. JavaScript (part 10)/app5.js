let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.dir(event);
});

btn.addEventListener("dblclick", function(event){
    console.dir(event);
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key was pressed")
    console.dir(event);
    console.log("key :",event.key);
    console.log("code :",event.code);
});

inp.addEventListener("keyup", function(){
    console.log("key was released");
});

let inp1 = document.querySelector("#play");
inp1.addEventListener("keydown", function(event){
    console.log("code : ",event.code);

    if(event.code=="ArrowUp"){
        console.log("Charecter moves 'up'");
    }
    else if(event.code=="ArrowDown"){
        console.log("Charecter moves 'down'");
    }
    else if(event.code=="ArrowLeft"){
        console.log("Charecter moves 'left'");
    }
    else if(event.code=="ArrowRight"){
        console.log("Charecter moves 'right'");
    }
});