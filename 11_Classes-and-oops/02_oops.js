//What is object literal -> it means making leterally an object only as a base object

// const User = {
//     username : "Pranav Kumar",
//     loginCount: 11,
//     isLoggedIn: true,

//     getDetails: function(){
//         console.log(`username : ${this.username}`);  //this keyword generaly tell the current context in which we are suppose if we didn't wright this keyword then the function does not know where this username is comeing from

//     }
// }

// console.log(User);
// console.log(User.getDetails());   

//Making new instances

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

// const userOne = User("Pranav", 12, true);
// const userTwo = User("Ojas", 40, false);   // if i make new instance like this the values will be overwrite so for that we need new keyword like below
// console.log(userOne);

const userOne = new User("Pranav", 12, true);
const userTwo = new User("Ojas", 40, false);   //just like here
console.log(userOne);
console.log(userTwo);

//Notes on new keyword
//1. whenever we use new keyword a empty object created
//2. constructor function is called and all the arguments available are packed and served to us
//3. all the arguments that we have written are injectd into this keyword