let btns = document.querySelectorAll("button");

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Suvajit Sadhukhan");
}

for(btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);

    btn.addEventListener("dblclick", function (){
        alert("you double clicked me!");
    })
}