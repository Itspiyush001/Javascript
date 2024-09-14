// const tinderUser = new Object()  (singleton object)
const tinderUser = {}  // non-singleton object

tinderUser.id = "3263abc"
tinderUser.name = "Isha"
tinderUser.idLoggedIn = false
// console.log(tinderUser);

const regularname = {
    email: "isha259@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Isha",
            lastname: "sinha"
        }
    }
}
// console.log(regularname.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "Isha@gmail.com",    
    },
    {
        id: 1,
        email: "Isha@gmail.com",    
    },
    {
        id: 1,
        email: "Isha@gmail.com",    
    },  
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course  = {
    coursename: "js in english",
    price: "499",
    courseInstructor: "Isha"
}
// course.courseInstructor

// const{courseInstructor} = course
// console.log(courseInstructor);

const{courseInstructor: instructor} = course
console.log(instructor);


// json is javascript object notation(used in Api industry)
// {
//     "name": "Isha",
//     "coursename": "Js in english",
//     "courseprice": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

