// Log a seprater to visually distinguish the output

console.log('---------------');

for(var year = 2014 ; year <= 2050; year++){
    // create a Date object for january 1st of the current year
    var d = new Date(year,0, 1);

    // check if january 1st is a sunday (where sunday corresponds to day index 0)
    if(d.getDay() === 0){
        // Log a message if january 1st is a sunday for the current year
        console.log("1st january is being a sunday " + year);
    }
}

// Log another seprater to conclude the output

// console.log('----------------------');