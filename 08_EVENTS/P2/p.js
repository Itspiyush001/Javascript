let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");

function changeColor (){
    console.log(this.innerText);
    this.style.backgroundColor = "Blue"
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
