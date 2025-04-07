// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was clicked");
// });

// let Box = document.querySelector(".box");
// Box.addEventListener("mouseenter", function(){
//     console.log("mouse inside div");
// })

let Btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor (){
    console.log(this.innerText);
    this.style.backgroundColor = "Blue";
}
Btn.addEventListener("click", changeColor)
p.addEventListener("click", changeColor)
 h1.addEventListener("click", changeColor)
h3.addEventListener("click", changeColor)