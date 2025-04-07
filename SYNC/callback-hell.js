function getData(dataId, getNextdata){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("sucess")
    if(getNextdata){
    getNextdata();

     }
 }, 4000)
    })

}

console.log("getting data1...")
getData(1, () => {
    console.log("getting data2 ....")
    getData(2, () => { 
    console.log("getting data3 ....")
    getData(3, () => {
    console.log("getting data4 ....")
    getData(4);

    });
    
    }); 
})