const istatus = document.querySelector("h5");

const btn = document.querySelector("#add");
let check = 0
// const removeFriend = document.querySelector("#remove");

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friend";
        istatus.style.color = "green"; 
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "red"
        check = 1
    } else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green"
        check = 0
    }
    
})

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "stranger";
//     istatus.style.color = "red";
// })