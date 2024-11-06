// if

const temperature = 41

// if(temperature === 40){
//     console.log("less than 50")
// } else{
//     console.log("temperature greater than 50")

// }

if(2 !== "2"){
    // console.log("executed");
}
// console.log("Not executed")

const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`user power : ${power}`)

}


// < = greater than
// > = less than
// <= = less or equal
// >= = greater or equal
// = = single operater (operater assignment)
// == --> eqaul
// != --> not equal
// === --> check the type and condition
// !== --> check the type and condition

// const balance = 1000

// if(balance > 500) console.log("test 1") , console.log("test 2")  wrong the code

// if (balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// } else if(balance < 900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const LoggedInGoogle = false
const LoggedInEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow the buy course");
} else{
    console.log("Not buy course");
}

if(LoggedInGoogle || LoggedInEmail){
    console.log("Allow the access course");
}

