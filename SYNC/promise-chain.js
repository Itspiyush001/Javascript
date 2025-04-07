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


// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res )
//     })
// })



// (part 2)
// console.log("fetching data1....");
// getData(1)
//     .then((res) => {
// console.log("fetching data2....");
//     return getData(2);
// }).then((res) => {
// console.log("fetching data3....");
//     return getData(3)
// }).then((res) => {
//     console.log("sucess")
// })




/// promsie 

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("some error occured")
// })

// function getData(dataId, getNextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextdata){
//             getNextdata();
//             }   
//         }, 2000);
//     });
// }





function asyncFunc1() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            console.log("Data1");
            resolve("sucess")
            },4000);
        });
    }
    
    function asyncFunc2() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            console.log("Data2");
            resolve("sucess")
            },4000);
        });
    }
    
    // part1
    // console.log("fetching Data1....")
    // let p1 = asyncFunc1();
    // p1.then((res) => {
    //     console.log(res);
    //     console.log("fetching Data2....")
    //     let p2 = asyncFunc2();
    //     p2.then((res) => {
    //     console.log(res);
    //     })
    // })
    
    // part2
    console.log("fetching Data1...");
    asyncFunc1().then((res) => {
    console.log("fetching Data2...");
    asyncFunc2().then((res) => {})
    
    })