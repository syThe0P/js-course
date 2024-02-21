//******************************************* For of loop ********************************************


//array
// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// //string
// const greeting = "Hello world!!";
// for (const greet of greeting) {
//     console.log(greet);
// }

// //map

// const map = new Map();
// map.set('IN' ,"India")
// map.set('USA' ,"United States of america")
// map.set('FR' ,"France")
// map.set('UK' ,"United Kingdom")


// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }
// //object  -> for off loop can be applied in objects

// const obj = {
//     IN : "India",
//     UK : "Unoted Kingdom"
// }

// for (const [key, value] of obj) {
//     console.log(`${key} :- ${value}`);
// }


//******************************************* For in loop ********************************************

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }




//******************************************* For each loop ********************************************


const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val);
})


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )