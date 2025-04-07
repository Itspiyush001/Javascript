// define a function to check if a given year is a leap year

function  leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2016))
console.log(leapYear(2015))
console.log(leapYear(2013))
console.log(leapYear(2010))

