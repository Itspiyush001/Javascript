const marvel_heros = ["Ironman", "spiderman", "Batman"]
const dc_heros = ["superman", "flashman", "flyingjat"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 3,]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("piyush"))
console.log(Array.from("PIYUSH"))
console.log(Array.from({name: "piyush"})) //    intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


