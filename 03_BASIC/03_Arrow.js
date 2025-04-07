const user = {
    username: "Isha",
    price: "989",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Mahi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Isha"
//     console.log(this.username);

// }   
// chai()

// const chai = function(){
//     let username = "Isha"
//     console.log(this.username)
// }

const chai = () => {
        let username = "Isha"
        console.log(this.username)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1 ,num2) =>({username: "Piyush"})

console.log(addTwo(8,9))

// const myArray = [8, 5, 6, 1]

// myArray.forEach(() => {})
