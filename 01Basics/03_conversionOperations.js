let score = "33";

console.log(score, typeof score);

let numScore = Number(score);  //Here we convert string to number 

console.log(numScore, typeof numScore);

//Now what will be the output of following conversions into number
/*
"33" => 33
null => 0;
"33abc" => NaN(Not a number)
undefined => NaN
true/false => 1/0;
*/

//Similarly we can convert to strings and booleans

//Number => String
let num = 33;
console.log( num, typeof num);
let numString =  String(num);
console.log(numString, typeof numString);

//NUmber => Boolean
let value = 1;
console.log(value, typeof value);
let newValue = Boolean(value);
console.log(newValue, typeof newValue);
