function sayMyName() {
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumber(5, 3)

    function addTwonumber(number1, number2){
        // let result = number1 + number2
        // return result
        return number1 + number2

    }

    const result = addTwonumber(4, 7)
    // console.log("Result:", result);

    // function loginusername (usermessage){
        // if(usermessage == undefined){  // if(!usermessage)
        //     // console.log("Please enter a username ")
        //     return 
        // }
    //     return `${usermessage} just logged in`
    // }
    // console.log(loginusername("Isha"))
    // console.log(loginusername())

        function calculateCartPrice(val1, val2, ...num1){
            return num1
        }
        // console.log(calculateCartPrice(200, 300, 700, 900));  

        const user = {
            name: "Isha",
            price: 599
        }

        function handleObject(anyobject){
                console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`)
        }
        // handleObject(user)
        handleObject({
            name: "Mahi",
            price: 199
        })

        const   myNewArray = [200, 500, 100]

        function returnSecondvalue(getArray){
            return getArray[1]
        }
        // console.log(returnSecondvalue(myNewArray))
        console.log(returnSecondvalue([200, 500, 100]))
