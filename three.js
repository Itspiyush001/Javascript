
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('UK', "United kingdom")
map.set('IN', "India")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

