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
// console.log("result :", addNumbers(2,4));

const value = addNumbers(2, 4);
// console.log(value);



function eccomerce(username){
    return `${username} is logged in.`;

}

// console.log(eccomerce("Pranav kumar"))

//Suppose we are making a function and we dont know how many argumnts will come so we use rest operator for this

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400, 500,600))  //so this rest operator will pass all the values inside of an array

//Handle object with functions

const user = {
    name: "Pranav",
    price: 199
}

function newFunc(anyobject){
    return `username is ${anyobject.name}, and price is ${anyobject.price}`;
}

console.log(newFunc(user));


//Handle array with functions

const array = [100, 200, 300, 400];

function secFunc(anyarray){
    return `The second value is ${anyarray[1]}`;
}

console.log(secFunc(array));