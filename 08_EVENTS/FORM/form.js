let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
//     console.dir(form);

//     // let inp = document.querySelector("input");
//     // console.dir(inp);
//     // console.log(inp.value);

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     let user = this.elements[0]; // form element
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("change event");
    console.log("final value = ", user.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ", user.value);
});