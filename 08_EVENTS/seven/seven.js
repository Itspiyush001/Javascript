// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("Clicked by me");

// })

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ",event.code); // Arrowup, Arrowdown, left, right
    if(event.code == "Arrowup"){
        console.log("character moves forward");
    } else if(event.code == "Arrowdown"){
        console.log("character moves backward");
    } else if(event.code == "Arrowleft"){
        console.log("character moves left");
    } else if(event.code == "Arrowright"){
        console.log("character moves right");
    }
})