let btn = document.querySelector("button");


btn.addEventListener("click",function (){
    // console.log("randon color generate");
    let h1 = document.querySelector("h1");
    h1.innerText = generateColor();

    let div = document.querySelector("div");
    div.style.background = generateColor();

    console.log("new color generated")
});

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    color = `rgb(${r},${g},${b})`;

    return color;
}

