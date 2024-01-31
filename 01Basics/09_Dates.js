//Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//And if we want output in our format for example dd-mm-yy
let myCreatedDate = new Date();
// console.log(myCreatedDate.toLocaleString());

//Time stamp

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


//To customize date format more we can use method like below
newDate.toLocaleString('default', {
    weekday: "long",

})