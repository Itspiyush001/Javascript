const user = {
    userName: "Piyush",
    age: 17,
    signedIn: true,

    getUserDetails: function() {
        console.log("got user details for database")
    }
}

console.log(user.userName);
console.log(user.getUserDetails());


