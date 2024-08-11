let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");


// btn.addEventListener("click", function(){
//     console.log(btn.innerText);
//     btn.style.background = "pink";
// });

// btn.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.background = "yellow";
// });

// h1.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.background = "yellow";
// });

// h3.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.background = "yellow";
// });

// p.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.background = "yellow";
// });

function changeColor(){
    console.log(this.innerText);
    this.style.background = "pink";
}

btn.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);