const coding = ["js", "ruby", "cpp", "ts"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
   { languageName: "Javascript",
    languageFileName: "js"
    },
    { languageName: "Java",
    languageFileName: "Java"
    },
    { languageName: "Python",
    languageFileName: "Py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})