let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    // user = form.elements[0];
    // pass = this.elements[1];

    console.dir(pass);
    console.log(pass.innerHTML);

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});