let p = document.querySelector("p");
p.addEventListener("click", function (){
    console.log("para is clicked"); 
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function (){
    box.style.background = "pink";
});
