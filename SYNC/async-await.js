// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("weather data")
//             resolve(200);
//         },200);
//     });
// }

// async function getWeatherData(){
//     await api(); //1st call
//     await api(); // 2nd call
//     await api(); // 3rd call
// }


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId)
            resolve("sucess")
        }, 3000)
    })
}

// Async-await
async function getAllData(){
    console.log("getting data1....")
    await getData(1);
    console.log("getting data2....")
    await getData(2);
    console.log("getting data3....")
    await getData(3);
    console.log("getting data4....")
    await getData(4)

}