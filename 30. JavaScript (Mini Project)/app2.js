let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value+" ";
    ul.append(item);
    // console.log(inp.value);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.append(delBtn);
    inp.value = "";
})


ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    // console.log("button Clicked")

    // if(event.target.nodeName == "BUTTON"){
    //     console.log("delete");
    // }else{
    //     console.log("don't delete");
    // }

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
})


// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         // console.log("item deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }