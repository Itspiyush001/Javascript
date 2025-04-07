const URL = "https://cat-fact.herokuapp.com/facts/piyush";   
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data...")
    let response =  await fetch(URL);
    console.log(response);// json format    
    let data  = await response.json();
    factPara.innerText = data[1].text;
};

// function getFacts()
// {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data); 
//         factPara.innerText = data[2].text;
//     })
// }
btn.addEventListener('click', getFacts)
