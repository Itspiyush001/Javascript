const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls , Cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 ")
            resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({userName : "Piyush", Email : "piyush2123@gmail.com "})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username: "piyush", password: "123"} )
    } else{
        reject('ERROR: Something went Wrong');
    }
    
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promised is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false   
        if(!error){
            console.log({username : "Aman", password: "09876" })
        } else{
            reject('ERROR: Js went wrong')
        }
    }, 1000)
});

async function consumepromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error)
   }
}

consumepromiseFive();

// async function getAllUsers(){
//     try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data = await response.json()
//     console.log(data); 
//     } catch (error) {
//         console.log("E:" , error);
        
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
