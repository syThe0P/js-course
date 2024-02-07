//One more method to create objects
// const tinderApp = new Object();

const tinderApp = {};
tinderApp.id = "123";
tinderApp.name = "pranav";
tinderApp.email = "Pranav@google.com";
tinderApp.isLoggedIn = true;

// console.log(tinderApp);

//When we have objects under objects

const regularUser = {
    email: "pranav@gmail.com",
    fullname: {
        username: {
            firstname: "pranav",
            lastname: "kumar"
        }
    }
}


//to access these values
// console.log(regularUser.fullname.username.firstname);


//If we need to combine two or more objects there are number of methods

const obj1 = {1: "A", 2: "B"};
const obj2 = {3: "A", 4: "B"};


//Spread operator just like in arrays is is mostly used method
// const obj3 = {...obj1, ...obj2};

// console.log(obj3);

//Assign method

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);


//Few Objects method
console.log(Object.keys(tinderApp));   //Print the keys of objects in array format
console.log(Object.values(tinderApp)); //Print the values of object in array format

console.log(tinderApp.hasOwnProperty("id"));  //It checks the is there any property in the object that is mentioned



