//Functions are if we want to do same piece of work over and over again we use functions

// console.log("P");
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("A");
// console.log("V");

//So to avoid this situation we use functions

function myName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// myName();


function addNumbers(number1, number2){
    const result = number1 + number2;
    return result;
}
console.log("result :", addNumbers(2,4));

const value = addNumbers(2, 4);
console.log(value);



function eccomerce(username){
    return `${username} is logged in.`;

}

console.log(eccomerce("Pranav kumar"))