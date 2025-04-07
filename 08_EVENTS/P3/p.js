let inp = document.querySelector("#text");
let heading = document.querySelector("#nameHeading");

inp.addEventListener("input", function(){
    const replaceInput = inp.value.replace(/[^a-zA-Z\s]/g, '');

    inp.value = replaceInput;

    heading.textContent = replaceInput;
})



    
