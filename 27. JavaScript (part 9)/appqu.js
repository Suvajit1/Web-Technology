let para = document.createElement("p");
para.innerText = "Hey I'm red!";
document.body.append(para);
para.style.color = "red";

let blue = document.createElement("h3");
blue.innerText = "I'm a blue h3!"
blue.style.color="blue";
document.body.append(blue);

let box = document.createElement("div");
document.body.append(box);
box.style.backgroundColor="pink";
box.style.border = "1px solid black";
let head = document.createElement("h1");
head.innerText = "I'm in a div";
box.append(head);
let newp = document.createElement("p");
newp.innerText = "ME TOO!";
box.append(newp);