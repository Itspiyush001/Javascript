// const BASE_URL =
//     "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";

// const dropdowns = document.querySelectorAll(".dropdown select")
// const button =  document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const Message = document.querySelector(".msg")


// for (let select of dropdowns) {
//   for(currCode in countryList){
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if(select.name === "from" && currCode === "USD"){
//         newOption.selected = "selected"
//     } else if(select.name === "to" && currCode === "INR"){
//         newOption.selected = "selected"
//     }
//     select.append(newOption);

//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);

//   })
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// button.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     const inputElement = document.getElementById('myInput');
//     console.log(inputElement.value);
//     const amtval = inputElement.value
//     if(amtval === "" || amtval < 1){
//         amtval = 1;
//         inputElement.value = "1";
        
//     }
    

    
//     // console.log(fromCurr.value, toCurr.value);
//     const URL = `${BASE_URL}${fromCurr.value}_${toCurr.value}.json`;
//     try{
//       let response = await fetch(URL);
//       let data = await response.json();
//       let rate = data.rate;
    
  
    
    

//   let finalAmount = amtval * rate;

//     Message.innerText = `${amtval} ${fromCurr.value} =  ${finalAmount}${toCurr.value}`;

//   } catch (error){
//     Message.innerText = "Error fetching currency data. Please try again later.";
//         console.error("Error:", error);
//   }

//   });



const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";


const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const Message = document.querySelector(".msg");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    const inputElement = document.getElementById('myInput');
    let amtval = parseFloat(inputElement.value); // Ensure amtval is a number

    // Check if amtval is valid or less than 1
    if (isNaN(amtval) || amtval < 1) {
        amtval = 1;
        inputElement.value = "1";
    }

    // Construct the API URL
    const URL = `${BASE_URL}${fromCurr.value}_${toCurr.value}.json`;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data.rate;

        let finalAmount = amtval * rate;
        Message.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        Message.innerText = "Error fetching currency data. Please try again later.";
        console.error("Error:", error);
    }
});


