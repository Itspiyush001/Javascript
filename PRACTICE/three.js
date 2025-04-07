// Define the lengths of the three side of traingles 
var side1 = 8;
var side2 = 6;
var side3 = 4;

// calculate the semi- perameter of the traingle
var s =  (side1 + side2 + side3) / 2;

// use herons formula to calculate of the traingle 
var area = Math.sqrt(s *((s - side1) *(s - side2) * (s- side3)));

// Log the calculated area of the console
console.log(area);