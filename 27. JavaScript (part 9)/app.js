document.getElementsByTagName("a");
ocument.getElementById("mainImg")
let imgObj = document.getElementById("mainImg")
imgObj.id
imgObj.tagName
imgObj.classList
document.getElementById("description")
let para= document.getElementById("description")
console.dir(para)
document.getElementsByClassName("boxLink")[0]
document.getElementsByClassName("boxLink")[1]
document.getElementsByTagName("p")
// document.getElementsByTagName("p")[0].innerText = "abc"
document.querySelector("div li")
para = document.querySelector("p")
para.innerText
para.textContent
para.innerHTML
// para.innerText= "hi!, I'm Suvajit";
// para.innerText= "hi!, <b>I'm Suvajit<b>";
// para.innerHTML= "hi!, <b>I'm Suvajit<b>";
let heading = document.querySelector("h1")
heading.innerHTML = `<u>${heading.innerText}<u>`

let image = document.querySelector("img")
image.attributes
image.getAttribute("id")
image.setAttribute("id","photo")
image.getAttribute("id")
image.setAttribute("class","phClass")
image.attributes


let ch = document.querySelector("div")
let anc= ch.querySelectorAll("li a")
for(i =0; i<anc.length;i++){
    anc[i].style.color="yellow";
}  

document.querySelector("h1").classList
document.querySelector("h1").classList.add("green")
document.querySelector("h1").classList
document.querySelector("h1").classList.remove("green")
document.querySelector("h1").classList.toggle("green")
document.querySelector("h1").classList.toggle("green")
document.querySelector("h1").classList.contains("green")


let box = document.querySelector("div");
let newp = document.createElement("p");
newp.innerText = "It's a new para";

box.appendChild(newp)

let btn= document.createElement('button');
box.append(btn);
btn.innerText = "Click Me"

newp.append(" adding some more text");
box.prepend(newp);

box.removeChild(btn);
newp.remove();