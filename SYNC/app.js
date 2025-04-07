// ** promise chaining

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("Data1");
//         resolve("sucess")
//         },4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("Data2");
//         resolve("sucess")
//         },4000);
//     });
// }

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
// console.log("fetching Data1...");
// asyncFunc1().then((res) => {
// console.log("fetchinf Data2...");
// asyncFunc2().then((res) => {})

// })








// *** promsie

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




//  callbacks

// console.log("one")
// console.log("Two")
// console.log("")
// setTimeout(() =>{
//     console.log("Hello world")

// } ,4000) // setTimeout 2s = 2000 ms

// console.log("Three")
// console.log("four")


// callback

// function sum(a,b){
//     console.log(a + b)
// }


// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(3, 2, (a,b) => {
//     console.log(a + b)  

// });


//*3
// function hello(){
//     console.log("Hello world")
// }
// setTimeout(hello, 3000)


// nesting

// let age = 18;

// if(age>=17){
//     if(age>=23){
//         console.log("senior")
//     } else{  
//         console.log("middle")
//     }
// } else{
//     console.log("child")
// }

// **4
// function getData(dataId, getNextdata){
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//     console.log("data", dataId);
//     resolve("sucess")
//     if(getNextdata){
//     getNextdata();

//      }
//  }, 4000)
//     })

// }

// promise chain (part1)

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

// ** callback hell

// getData(1, () => {
//     console.log("getting data2 ....")
//     getData(2, () => { 
//     console.log("getting data3 ....")
//     getData(3, () => {
//     console.log("getting data4 ....")
//     getData(4);

//     });
    
//     }); 
// })
    

