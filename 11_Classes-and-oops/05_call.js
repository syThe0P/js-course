//Call ->  this method in javascript is used to invoke a function with a specified value and argument provide individually

// function setUsername(username){
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUsername(username);                         //So here username is called but was not assigned in this function so for that we need to take the refference from the function in global scope using a method .call()

//     this.email = email;
//     this.password = password;
// }

// const user = new createUser("Pranav", "Pranav@gmail.com", "123");
// console.log(user);


function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username);                      

    this.email = email;
    this.password = password;
}

const user = new createUser("Pranav", "Pranav@gmail.com", "123");
console.log(user);