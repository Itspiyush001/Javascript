// primitive 

// 7 types = string, number, boolean, null, undefined, symbol, BigInt

// non-primitive (refrence)

// arrays, objects, functions

const score = 100
const scorevalue = 103.90

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);


const BigNumber = 781259874589n

const heros = ["piyush", "satyam", "Rishi"]
 let MyObj = {
    name: "Aryan",
    age: 21,
}


const MyFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);




// *****************************************************************

// two types of memory in javascript
// Stack(primitive) , Heap(non-primitive)

let myYoutubename = "codeingwala"
let anothername = myYoutubename
anothername = "geeksforgeeks"

console.log(myYoutubename); 
console.log(anothername);

let userOne = {
    email:"piyush@google.com",
    upi: "isha@ybl"
}

let userTwo = userOne
userTwo.email = "piyush21@gmail.com"

console.log(userOne)
console.log(userTwo.email)

