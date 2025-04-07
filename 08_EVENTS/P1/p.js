let btn = document.querySelector("button");
let inp = document.querySelector("input");
let p = document.querySelector(".scrolling");

btn.addEventListener("mouseout", function(){
    console.log("Run the code");
});

inp.addEventListener("keypress", function(){
    console.log("sucessfull");
})

window.addEventListener("scroll", function(){
    console.log("code will be run");
})