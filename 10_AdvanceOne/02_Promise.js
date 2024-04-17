//Promises = Promise is a object which represents he eventual completion (or failure) of an asynchronous operation and its resulting value.

//Creating a promise

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async tast completed");
//         resolve();
//     },1000);
// })

// //Consuming the promise
// promiseOne.then(function(){
//     console.log("Promise Consumed of promiseOne");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise Consumed of PromiseTwo");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     resolve({username: "Pranav", email: "pranav@example.com"});
// })

// promiseThree.then((user)=>{
//     console.log(user);

// })

// const promiseFour = new Promise((resolve,reject)=>{
//     const error = false;
//     if(!error){
//         resolve({username: "Ojas", email: "Ojas@example.com"})
//     }
//     else{
//         reject("Something Went Wrong");
//     }
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.email;
// })
// .then((email)=>{
//     console.log(email);
// })
// .catch((error)=> console.log(error));

//Another method in promise other than .then method is async await 
// const promiseFive = new Promise((resolve, reject) => {
//     const error = true;
//     if (!error) {
//         resolve({ username: "Javascript", email: "Java@example.com" })
//     }
//     else {
//         reject("Error : Js Went wrong");
//     }
// })

// async function consumedPromise() {

//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumedPromise();

//fetch method with async await

async function urlResponse() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

urlResponse();

//Same fetch method using .then method

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))