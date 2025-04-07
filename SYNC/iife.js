// automatic code execute and do not call another function

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.group("Data", dataId)
            resolve("sucess")
        }, 3000)
    })
}

(async function  (){
    console.log("geeting data1...")
    await getData(1);
    console.log("geeting data2...")
    await getData(2);
    console.log("geeting data3...")
    await getData(3);
    console.log("getting data4...")
})();