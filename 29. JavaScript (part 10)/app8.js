let inp = document.querySelector("input");

inp.addEventListener("change", function(){
    console.log("change event");
    console.log(this.value);
});

inp.addEventListener("input", function(){
    console.log("input event");
    console.log(this.value);

    let p = document.querySelector("p");
    p.innerText = this.value;
});

