//Singleton - this is only created when we define object through constructor method

//define object
const JSuser = {
    name: "Pranav",
    "Full name" : "Pranav Kumar",
    age: 23,
    email: "pranavkumar1522@gmail.com",
    location: "Delhi",
    isLoggedIn: true,
    LoggedInDays: ["Monday", "Friday"]
}

// To access elements in object
console.log(JSuser.name);   //dot method can be used but not widely bcause it cannot handle special cases
console.log(JSuser["name"]); //this square bracket method is used mostly because ot can handle special cases for example "Full name"
console.log(JSuser["Full name"]); //tHIS FULL NAME PROPERTY we can't acces it through dot method

//if we want to pass symbol in symbol form in an object

//define symbol;
const mySym = Symbol("key1");

const JSuser1 = {
    name: "Pranav",
    "Full name": "Pranav Kumar",
    mySym: "Key1",    //If we define like this it will be in a string format
    [mySym]: "Key1",  //No it will display in symbol format
    age: 23,
    email: "pranavkumar1522@gmail.com",
    location: "Delhi",
    isLoggedIn: true,
    LoggedInDays: ["Monday", "Friday"]
}

//We can also overwrite the values

JSuser.email = "official.pranavkumar@gmail.com";
console.log(JSuser)

//But if we dont want someone to change the values we can freeze the user

Object.freeze(JSuser);
JSuser.name = "Kanika";
console.log(JSuser);



//we can also pass functions into the object for example below

JSuser.greeting = function(){
    console.log("Hello, JS user");
}

console.log(JSuser.greeting());

//but if we want to pass some properties from the object into the function we use string interpolation

JSuser.greeting2 = function(){
    console.log(`Hello, JS user, ${this.name}`);
}

console.log(JSuser.greeting2());