// get the current date and time
var today = new Date();

// get the day of the week (0-6, where 0 is sunday and 6 is saturday)
var day = today.getDay()

// Array of the day names
var dayList = ["sunday", "monday", "Tuesday", "wednesday", "thrusady","friday","saturday"]

// Display the current days
console.log("Today is : " + dayList[day] + ".");

// get the current hour, minute, second

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// determine if its AM or PM
var prepand = (hour >= 12) ? "AM": "PM";

// 24 - hour to format to 12 - hour 
hour = (hour >= 12) ? hour - 12 : hour;

// check for special cases when our is 0

if(hour === 0 && prepand === 'PM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'Noon';
    } else{
        hour = 12;
        prepand = ' PM'
    }
}

// check for spcial cases when our is 0

if(hour === 0 && prepand === 'AM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'midnight';
    } else{
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current Time 
console.log("curret Time :" + hour + prepand + " : " + minute + " : " + second + " : ");