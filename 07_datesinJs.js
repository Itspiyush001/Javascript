/// date


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2024, 11, 10) 
// console.log(myCreatedDate.toDateString())   

let ICreatedDate = new Date(2024, 0, 10, 8, 4) 
// console.log(ICreatedDate.toLocaleString())

let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor((Date.now()/1000)));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
})  