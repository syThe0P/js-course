//While loop

let i = 0;
while (i<=10) {
    // console.log(`The value is ${i}`);
    i++;
}


//While loops in array
const myArray = ["Superman","Batman", "flash"];
let index = 0;
while (index < myArray.length) {
    // console.log(`Value is ${myArray[index]}`)
    index++;
}


//do while loop
let score = 1;
do {
    console.log(`The score is ${score}`);
    score++;
} while (score <=10);

//But what if the score is 11 from starting
let score1 = 11;
do {
    console.log(`The score is ${score1}`);           //The code will still execute, so difference between while loop and do while loop is in do-while loop even if the condition in not satisfied even from the start the code will still execute once
    score++;
} while (score1 <=10);