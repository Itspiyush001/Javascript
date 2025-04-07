const name = "Isha"
const repocount = 20

// console.log(name + repocount);

console.log(`my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('Isha')
console.log(gameName[0])
console.log(gameName.___proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);

const newStringone =  "  Isha"
console.log(newStringone)
console.log(newStringone.trim())

const url = "https://ishasingh.com/isha%10sinha"
console.log(url.replace('%10', '-'))

console.log(url.includes('true'))

console.log(gameName.split('-'));







