// singleton
// object.create

// object literals

const mySym = Symbol("key1") 

const jsUser = {
    name: "Isha",
    fullName: "Isha sinha",
    age: 15,
    [mySym]: "mykey1",
    location: "Ambikapur",
    email: "isha384@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym]) 

jsUser.email = "ishachat43@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ishagpt@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Isha");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user   , ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())

